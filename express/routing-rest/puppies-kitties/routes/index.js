const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Welcome to my Express app with router.");
});

router.get('/home', (req, res) => {
    res.send("Welcome to my home route!");
});

module.exports = router;