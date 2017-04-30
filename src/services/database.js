const controllers = require('../controllers');

const createNewUser = (request, response) => {
    controllers.Account.createAccount(request, response);
};

const getAllAccounts = (request, response) => {
    controllers.Account.getAllAccounts(request, response);
};

const getAllRelationships = (request, response) => {
    controllers.Relationship.getAllRelationships(request, response);
};

const getUserRelationships = (request, response) => {
    controllers.Relationship.getUserRelationships(request, response);
};

const getAccountByName = (request, response) => {
    controllers.Account.searchByUserName(request, response);
};

const createRelationship = (request, response) => {
    controllers.Relationship.createRelationship(request, response);
};

module.exports = {
    createNewUser,
    getAllAccounts,
    getAllRelationships,
    getUserRelationships,
    createRelationship,
    getAccountByName,
};