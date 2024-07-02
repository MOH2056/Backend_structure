const express = require('express');
const router = express.Router();
const UserController = require('../controllers/Usercontrollers');
const { authenticate } = require ('../middleware/auth.middleware')
// Registration route
router.post('/register', UserController.register);

// Login route
router.post('/login', UserController.login);

// Other routes
router.get('/users/:id', UserController.getUser);
// Implement other routes as needed: updateUser, deleteUser, etc.
// router.patch('/users/:id', UserController.updateUser);
// router.delete('/users/:id', UserController.deleteUser);

module.exports = router;
