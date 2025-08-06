const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
    UserName: {
        type: String,
        required: true
    },
    Score: {
        type: Number,
        required: true
    },
    TotalQuestions: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Score_Database', ScoreSchema);