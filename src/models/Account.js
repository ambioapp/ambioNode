const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let AccountModel = {};

const AccountSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        unique: false,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        unique: false,
    },
    dateOfBirth: {
        type: Date,
        required: true,
        trim: true,
        unique: false,
    },
});

AccountModel = mongoose.model('Account', AccountSchema);

module.exports.AccountModel = AccountModel;
module.exports.AccountSchema = AccountSchema;