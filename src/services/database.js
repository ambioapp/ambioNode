const controllers = require('../controllers');

const createNewUser = (request, response) => {
    controllers.Account.createAccount(request, response);
};

const getAllAccounts = (request, response) => {
    controllers.Account.getAllAccounts(request, response);
};

module.exports = {
    createNewUser,
    getAllAccounts,
};