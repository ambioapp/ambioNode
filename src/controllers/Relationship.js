const models = require('../models');

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

const createRelationship = (req, res) => {
    console.log(req.body);
    
    if (!req.body.userName || !req.body.followingUserName || !req.body.sensitivity) {
        return res.status(400).json({error: 'username, FollowingUserName, and Sensitivity are required'});
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
    createRelationship: createRelationship,
};