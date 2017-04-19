const models = require('../models');

const Account = models.Account.AccountModel;

const defaultData = {
    userName: 'default',
    email: 'default@ambio.tech',
    firstName: 'default',
    lastName: 'default',
    dateOfBirth: new Date(2017, 4, 18),
};

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

const getAccount = (req, res) => {
    const userName = req.query.userName;
    
    const callback = (err, doc) => {
        if (err) {
            return res.json({err});
        }
        
        return res.json(doc);
    }
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
        res.json({message: 'user accont created'});
    })
    

    // if error, return it
    savePromise.catch((err) => res.json({ err }));

    return res;
}

module.exports = {
    getAllAccounts: getAllAcounts,
    getAccount: getAccount,
    createAccount: createAccount,
}