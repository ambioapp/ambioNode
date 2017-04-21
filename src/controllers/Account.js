const models = require('../models');

const Account = models.Account.AccountModel;

const getAllAcounts = (req, res) => {
    const callback = (err, docs) => {
        if (err) {
            return res.json({err});
        }
        
        return res.json({docs});
    };
    
    findAllAcounts(req, res, callback);
}

const findAllAcounts = (req, res, callback) => {
    Account.find(callback);
};

const searchByUserName = (req, res) => {
    console.log
    if (!req.query.userName) {
        return res.status(400).json({error: 'name is required to search'});
    }
    
    return Account.findByUserName(req.query.userName, (err, doc) => {
        if (err) {
            return res.json({err});
        }
        
        if (!doc) {
            return res.json({error: 'No Account found with that name'});
        }
        
        return res.json({doc: doc});
    })
}

const createAccount = (req, res) => {
    console.log(req.body);
    
    if (!req.body.userName || !req.body.email) {
        return res.status(400).json({error: 'username and email are required'});
    }
    
    const accountData = {
        userName: req.body.userName,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
    };
    
    const newAccount = new Account(accountData);
    
    const savePromise = newAccount.save();
    
    savePromise.then(() => {
        res.json({message: 'user account created'});
    }).catch((err) => res.json({ err }));

    return res;
}

module.exports = {
    getAllAccounts: getAllAcounts,
    searchByUserName: searchByUserName,
    createAccount: createAccount,
}