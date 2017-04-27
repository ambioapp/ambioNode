const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let RelationshipModel = {};

const RelationshipSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: false,
    },
    followingUserName: {
        type: String,
        required: true,
        trim: true,
        unique: false,
    },
    sensitivity: {
        type: Number,
        required: false,
        unique: false,
    }
});

RelationshipSchema.statics.findByUser = (userName, callback) => {
    const search = {
        userName: userName,
    };
    
    return RelationshipModel.find(search, callback);
}

RelationshipModel = mongoose.model('Relationship', RelationshipSchema);

module.exports.RelationshipModel = RelationshipModel;
module.exports.RelationshipSchema = RelationshipSchema;