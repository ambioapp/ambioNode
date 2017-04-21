const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, `${__dirname}/../files`);
  },
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}.wav`);
  },
});

const upload = multer({ storage });

const dbURL = process.env.MONGODB_URI || 'mongodb://localhost/ambioDataBase';

mongoose.connect(dbURL, (err) => {
    if (err) {
        console.log('Could not connect to the database...');
        throw err;
    }
});

const app = express();

const staticFileHandler = require('./handlers/staticFiles.js');
const jsonHandler = require('./handlers/json.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

app.use((req, res, next) => {
  next();
});


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static('client'));

app.get('/', (req, res) => {
  res.sendFile(path.join(staticFileHandler.getIndex()));
});

app.get('/getAllAccounts', (req, res) => {
   jsonHandler.getAllAccounts(req, res); 
});

app.get('/getAccountByName', (req, res) => {
    jsonHandler.getAccountByName(req, res);
})

app.post('/getBeyondVerbal', upload.single('test'), (req, res, next) => {
  jsonHandler.getBeyondVerbal(req, res);
});

app.post('/createAccount', (req, res, next) => {
   jsonHandler.createAccount(req, res); 
});

app.use((req, res) => {
  res.send('404, not found');
});

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}!`);
});


