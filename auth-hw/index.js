const express = require('express');
const routes = require('./routes');
const isAuthenticaed = require('./middleware/is-authenticated')

const app = express();

app.use(isAuthenticaed);
app.use(express.json());
app.use(routes);

app.listen(3000, () => {
    console.log("Now listening to port 3000");
});
