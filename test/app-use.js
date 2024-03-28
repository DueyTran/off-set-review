const express = require('express');

const app = express();

app.use('/', (req, res) => {
    res.send("Hi there.")
});

app.listen(3000, () => console.log("Now listening to port:3000"));
