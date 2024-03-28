const express = require('express');
const routes = require('./routes');
const puppyRoutes = require('./routes/puppies');
const logger = require('./middleware/logger');

const app = express();

app.use(express.json());
app.use("/", routes);
app.use('/puppies', logger, puppyRoutes);

app.listen(3000, () => {
    console.log("Now listening to port:3000");
});