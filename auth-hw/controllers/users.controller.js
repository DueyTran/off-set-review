const usersDb = require('../users')
let id = 2;

// get all users
exports.getAll = (req, res) => {
    res.json(usersDb);
}

// get one user
exports.getOne = (req, res) => {
    let id = req.params.id;
    let foundUser = usersDb.find(user => user.id == id);
    
    if (foundUser) {
        res.json(foundUser);
    }
    else {
        res.status(404).send();
    }
}

// add one user
exports.addOne = (req, res) => {
    let user = req.body;
    user.id = id;
    id++;
    usersDb.push(user);
    res.json(user);
} 

// update one user
exports.updateOne = (req, res) => {
    let id = req.params.id;
    let foundUser = usersDb.find(user => user.id == id);

    if (!foundUser) {
        res.json.satus(404);
        return;
    }

    let updatedUserProperty = req.body;
    for (let key in updatedUserProperty) {
        foundUser[key] = updatedUserProperty[key];
    }

    res.json(foundUser);
}

// delete one user
exports.deleteOne = (req, res) => {
    let id = req.params.id;

    let index = usersDb.findIndex(user => user.id == id);

    if (index === -1) {
        res.status(404).send();
        return;
    }

    let deletedUsersArray = usersDb.splice(index, 1);
    let deletedUser = deletedUsersArray[0];

    res.json(deletedUser);
}

exports.getProfile = (req, res) => {
    let id = req.params.id;
    let foundUser = usersDb.find(user => user.id == id);
    let gender = foundUser.gender;
    let username = foundUser.username;

    if (!foundUser) {
        res.status(404).send();
        return;
    }

        res.send(`

        <img src="https://avatars.dicebear.com/api/${gender}/${username}.svg"/>

        `)
}