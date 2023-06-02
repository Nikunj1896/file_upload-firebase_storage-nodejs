const admin = require('firebase-admin');
const express = require('express');
const formidable = require('formidable');
const router = express.Router();
const credential = require('./file-uploading-demo-firebase-adminsdk-pfkmg-84aaa82081.json');
const UUID = require("uuid-v4");


admin.initializeApp({
  apiKey: "AIzaSyDzM0byTwuNIuFmN1FaTFheVNNrewUwc-U",
  authDomain: "file-uploading-demo.firebaseapp.com",
  projectId: "file-uploading-demo",
  storageBucket: "file-uploading-demo.appspot.com",
  messagingSenderId: "1048619933332",
  appId: "1:1048619933332:web:5cac2bf184a76928b9de81",
  credential: admin.credential.cert(credential)
});

const bucket = admin.storage().bucket();

router.post('/', async (req, res) => {
  let uuid = UUID();

  const form = formidable({ multiples: true });

    form.parse(req, async (err, fields, files) => {

      try {
        const file = files.file;
        await bucket.upload(file.filepath,{
          metadata: {
            metadata: {
              firebaseStorageDownloadTokens: uuid
            }
          }
        })
      
        res.json({url : "https://firebasestorage.googleapis.com/v0/b/" + bucket.name + "/o/" + file.filepath.split('/')[2] + "?alt=media&token=" + uuid})
      } catch (error) {
          console.log(error);
      }
    })


});

module.exports = router;