// import the user mode
const User = require('../models/model.js');

// get all users
async function getAllUsers(request, response) {
    // get all users
    try {
        const users = await User.find();
        response.status(200).json(users); // Respond with all users
    } catch (error) {
        response.status(500).json({
            message: err.message || "Some error occurred while retrieving users."
        });
    }
}

// get a user by ID
async function getUserById(request, response) {
    // get a user by ID
    try {
        const user = await User.findById(request.params.id);
        if (!user) {
            response.status(404).json({
                message: "User not found with id " + request.params.id
            });
        }
        response.status(200).json(user); // Respond with a single user
    } catch (error) {
        response.status(500).json({
            message: "Error retrieving user with id " + request.params.id
        });
    }
}

module.exports = {
    getAllUsers,
    getUserById
}