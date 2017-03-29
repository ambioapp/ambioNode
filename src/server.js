const express = require('express');
var multer  = require('multer');
const path = require("path");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${__dirname}/../files`)
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.wav')
  }
});

var upload = multer({ storage: storage });

var app = express();

const staticFileHandler = require('./handlers/staticFiles.js');
const jsonHandler = require('./handlers/json.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

app.use(function (req, res, next) {
	next();
});

app.get('/', function(req, res) {
    res.sendFile(path.join(staticFileHandler.getIndex()))
});

app.post('/getBeyondVerbal', upload.single('test'), function (req, res, next) {
    jsonHandler.getBeyondVerbal(req, res);
 });

app.use(function(req, res) {
   res.send('404, not found'); 
});

app.listen(port, function () {
  console.log(`Example app listening on port: ${port}!`)
})