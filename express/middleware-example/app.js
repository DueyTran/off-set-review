const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));
app.use(express.static('public'))

app.use((req, res, next) => {
    req.user = { 
        name: "Aaron",
    };

    next();
});

let myMiddleware = (req, res, next) => {
    console.log("Hello middleware");
    next();
} 

app.get('/hello', myMiddleware, (req, res) => {
    res.send("Hello " + req.user.name);
});


app.listen(3000, (req, res) => {
    console.log("listening 3000");
});