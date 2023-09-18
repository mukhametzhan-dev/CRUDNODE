// import the user mode
const User = require('../models/model.js');

// update a user by ID

async function updateUserById(request, response) {
    const { name, email, age } = request.body;
    // Find user and update it
    try {
        const user = await User.findByIdAndUpdate(request.params.id, { name, email, age }, { new: true });
        if (!user) {
            response.status(404).json({
                message: "User not found with id " + request.params.id
            });
        }
        response.status(200).json(user); // Respond with a single user
    } catch (error) {
        response.status(500).json({
            message: "Error updating user with id " + request.params.id
        });
    }
}

module.exports = updateUserById;