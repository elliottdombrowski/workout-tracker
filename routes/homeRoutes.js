const router = require('express').Router();
const path = require('path');
const Session = require('../models/Session');

router.get('/', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/index.html'));
        console.log('sending to home');
    } catch (err) {
        res.status(500).json(err);
    };
});

router.get('/exercise', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/stats', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/stats.html'));
    } catch (err) {
        res.status(500).json(err);
    };
});

router.get('/exercise/:id', (req, res) => {
    try {
        // FIND EXERCISE BY ID
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;