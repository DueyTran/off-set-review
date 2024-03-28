let usersDb = require('../users');

// includes secretKey at the end of URL
function isAuthenticaed (req, res, next) {
    let secretKey = req.query.secretKey;

    if (!secretKey) {
        return res.status(401).send();
    }

    const user = usersDb.find(user => user.secretKey === secretKey);

    if (!user) {
        return res.status(401).send();
    }

    user.numApiCalls++;

    next();
}

module.exports = isAuthenticaed;