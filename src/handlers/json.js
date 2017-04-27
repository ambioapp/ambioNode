const Analyzer = require('../services/beyondVerbal.js');
const analyzer = new Analyzer('KEY');

const dbService = require('../services/database.js');

const fs = require('fs');
const resultParser = require('./../services/resultParser.js');

const getBeyondVerbal = (request, response) => {
    // console.log('===params from json.js below===');
    // console.log(params.file);
  analyzer.analyze(fs.createReadStream(`${__dirname}/../../files/${request.file.filename}`), (err, analysis) => {
    response.json(resultParser.analyzeBeyondVerbal(analysis));
  });
};

const createAccount = (request, response) => {    
    dbService.createNewUser(request, response);
};

const createRelationship = (request, response) => {
    dbService.createRelationship(request, response);
};

const getAllAccounts = (request, response) => {
    dbService.getAllAccounts(request, response);
};

const getAllRelationships = (request, response) => {
    dbService.getAllRelationships(request, response);
};

const getUserRelationships = (request, response) => {
    dbService.getUserRelationships(request, response);
};

const getAccountByName = (request, response) => {
    dbService.getAccountByName(request, response);
};

module.exports = {
  getBeyondVerbal,
  createAccount,
  createRelationship,
  getAllAccounts,
  getAllRelationships,
  getUserRelationships,
  getAccountByName,
};
