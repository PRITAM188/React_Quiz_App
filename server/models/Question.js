const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: {
        type: [String],
        required: true
    },
    correctAnswer: {
        type: Number,
        required: true
    }
});
module.exports = mongoose.model('Quiz_Database', QuizSchema);