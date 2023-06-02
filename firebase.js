const { initializeApp } = require("firebase/app");
const { getStorage, ref, uploadBytes, getDownloadURL } = require("firebase/storage");

const firebaseConfig = {
  apiKey: "AIzaSyDzM0byTwuNIuFmN1FaTFheVNNrewUwc-U",
  authDomain: "file-uploading-demo.firebaseapp.com",
  projectId: "file-uploading-demo",
  storageBucket: "file-uploading-demo.appspot.com",
  messagingSenderId: "1048619933332",
  appId: "1:1048619933332:web:5cac2bf184a76928b9de81"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
module.exports = storage