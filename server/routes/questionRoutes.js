const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// Get All Questions
router.get('/', async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Post a New Question
router.post('/', async (req, res) => {
    const { question, options, correctAnswer } = req.body;
    try {
        const newQuestion = new Question({ question, options, correctAnswer });
        await newQuestion.save();
        res.status(201).json({message: "Question Added Successfully!"});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;