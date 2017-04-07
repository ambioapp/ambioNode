const Analyzer = require('../services/beyondVerbal.js');
const analyzer = new Analyzer('KEY');

const fs = require('fs');
const resultParser = require('./../services/resultParser.js');

const getBeyondVerbal = (request, response) => {
    // console.log('===params from json.js below===');
    // console.log(params.file);
  analyzer.analyze(fs.createReadStream(`${__dirname}/../../files/${request.file.filename}`), (err, analysis) => {
    response.json(resultParser.analyzeBeyondVerbal(analysis));
  });
};

module.exports = {
  getBeyondVerbal,
};
