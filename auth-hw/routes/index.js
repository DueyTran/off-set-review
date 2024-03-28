const express = require('express');
const router = express.Router();
const users = require('../controllers/users.controller');

router.get('/users', users.getAll); // get all users
router.get('/users/:id', users.getOne); // get one user
router.post('/users', users.addOne); // add one user
router.put('/users/:id', users.updateOne); // update one user
router.delete('/users/:id', users.deleteOne); // delete one user
router.get('/users/:id/profile', users.getProfile); // get user profile

module.exports = router;