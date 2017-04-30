const models = require('../models');
const accountController = require('../contollers/Account.js');

const Relationship = models.Relationship.RelationshipModel;

const getAllRelationships = (req, res) => {
    const callback = (err, docs) => {
        if (err) {
            return res.json({err});
        }
        
        return res.json({docs});
    };
    
    findAllRelationships(req, res, callback);
}

const findAllRelationships = (req, res, callback) => {
    Relationship.find(callback);
};

const getUserRelationships = (req, res) => {    
    const callback = (err, docs) => {
        if (err) {
            return res.json(err);
        }
        
        return res.json({docs});
    };
    
    findUserRelationships(req, res, callback);
};

const findUserRelationships = (req, res, callback) => {
    Relationship.findByUser(req.query.userName, callback);
};

const createRelationship = (req, res) => {
    console.log(req.body);
    
    if (!req.body.userName || !req.body.followingUserName) {
        return res.status(400).json({error: 'username and followingUserName are required'});
    }
    
    console.log('===CHECK ACCOUNTS EXIST HERE===');
    
    const relationshipData = {
        userName: req.body.userName,
        followingUserName: req.body.followingUserName,
        sensitivity: req.body.sensitivity,
    };
    
    const newRelationship = new Relationship(relationshipData);
    
    const savePromise = newRelationship.save();
    
    savePromise.then(() => {
        res.json({message: 'relationship created'});
    }).catch((err) => res.json({ err }));

    return res;
};

module.exports = {
    getAllRelationships: getAllRelationships,
    getUserRelationships: getUserRelationships,
    createRelationship: createRelationship,
};