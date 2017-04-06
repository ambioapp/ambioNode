var Analyzer = require('../services/beyondVerbal.js')
var analyzer = new Analyzer('KEY')

const fs = require('fs');
const resultParser = require('./../services/resultParser.js');

const getBeyondVerbal = (request, response) => {
    //console.log('===params from json.js below===');
    //console.log(params.file);
    analyzer.analyze(fs.createReadStream(`${__dirname}/../../files/${request.file.filename}`), function(err,analysis){
        response.json(resultParser.analyzeBeyondVerbal(analysis));
    });
}

module.exports = {
  getBeyondVerbal,
};