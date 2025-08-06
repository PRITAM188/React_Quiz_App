const express = require('express');
const router = express.Router();
const Score = require('../models/Score');

// Get All Questions
router.get('/', async (req, res) => {
    try {
        const ScoreSchema = await Score.find();
        res.json(ScoreSchema);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Post a New Question
router.post('/', async (req, res) => {
    const { UserName, Score, TotalQuestions } = req.body;
    try {
        const newScore = new Score({ UserName, Score, TotalQuestions });
        await newScore.save();
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;