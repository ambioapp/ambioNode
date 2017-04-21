const controllers = require('../controllers');

const createNewUser = (request, response) => {
    controllers.Account.createAccount(request, response);
};

const getAllAccounts = (request, response) => {
    controllers.Account.getAllAccounts(request, response);
};

const getAccountByName = (request, response) => {
    controllers.Account.searchByUserName(request, response);
}

const createRelationship = (request, response) => {
    controllers.Relationship.createRelationship(request, response);
};

module.exports = {
    createNewUser,
    getAllAccounts,
    createRelationship,
    getAccountByName,
};