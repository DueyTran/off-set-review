const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from my first express app.');
});

app.get('/home', (req, res) => {
    res.send('Hello from home page.');
});

app.get('/users/:userId', (req, res) => {
    res.send('Hello from the user ' + req.params.userId);
});

app.get('/:twitterId/status/:tweetId', (req, res) => {
    let twitterId = req.params.twitterId;
    let tweetId = req.params.tweetId;
    res.send(`TwitterId: ${twitterId} TweetId: ${tweetId}`);
});

app.get('/json', (req, res) => {
    res.json({message: 'Hello worl!'});
});

app.listen(3000, () => {
    console.log('Now listening on port 3000');
});