const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome!");
});

app.get('/add/:a/:b', (req, res) => {
    let {a,b} = req.params;
    let sum = Number.parseInt(a) + Number.parseInt(b);
    console.log(sum);
    res.send(`${sum}`);
});

app.listen(3000, () => {
    console.log("Now listening to port:3000");
});