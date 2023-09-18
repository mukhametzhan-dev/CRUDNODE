// Import required packages
const express = require('express');
const router = express.Router();

// Import the controller functions for CRUD operations on Users
const createUser = require('../controllers/create');
const { getAllUsers, getUserById } = require('../controllers/get');
const updateUserById = require('../controllers/update');
const deleteUserById = require('../controllers/delete');

// Define API routes

// Route: CREATE a new user
router.post('/createUsers', createUser);

// Route: GET all users
router.get('/getUsers', getAllUsers);

// Route: GET a user by ID
router.get('/getUsers/:id', getUserById);

// Route: UPDATE a user by ID
router.put('/updateUsers/:id', updateUserById);

// Route: DELETE a user by ID
router.delete('/deleteUsers/:id', deleteUserById);

// Export the router for use in your Express application
module.exports = router;
