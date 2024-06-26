const express = require('express');
const router = express.Router();
const UserController = require('.contollers/userController');
const User = require('./models/userS');

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/users', UserController.getUser);
router.get('/users/:id', UserController.getUser);
router.patch('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

module.exports = router;