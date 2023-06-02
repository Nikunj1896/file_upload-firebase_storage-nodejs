const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const router = require('./Routes/index');
const app = express();
app.use(cors());
app.use(bodyparser());

app.use(express())

const PORT = process.env.PORT || 5000;

// const db = getFirestore(firebaseApp)

app.use('/', router);

app.listen(PORT, () => {
    console.log('App is runnig on ', PORT)
})