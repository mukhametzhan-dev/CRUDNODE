// import the user mode
const User = require('../models/model.js');

// delete a user by ID

async function deleteUserById(request, response) {
    // Find user and delete it
    try {
        const user = await User.findByIdAndDelete(request.params.id);

        if (!user) {
            response.status(404).json({
                message: "User not found with id " + request.params.id
            });
        }
        response.status(200).json({
            message: "User deleted successfully!"
        });
    } catch (error) {
        response.status(500).json({
            message: "Could not delete user with id " + request.params.id
        });
    }
}

module.exports = deleteUserById;