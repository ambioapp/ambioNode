const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let MoodModel = {};

const MoodSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: false,
    },
    status: {
        type: String,
        required: true,
        trim: true,
        unique: false,
    },
    date: {
        type: Date,
        required: true,
        unique: false,
    },
    confidence: {
        type: Number,
        required: false,
        unique: false,
    },
});

MoodModel = mongoose.model('Mood', MoodSchema);

module.exports.MoodModel = MoodModel;
module.exports.MoodSchema = MoodSchema;