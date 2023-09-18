// import the user mode
const User = require("../models/model.js");

// create new user
async function createUser(request, response) {
    try {
        const { name, email, age } = request.body;
        // create new user
        const newUser = new User({ name, email, age });

        // save user in the database
        await newUser.save();
        response.status(200).json(newUser);
    } catch (err) {
        response.status(500).json({
            message: err.message || "Some error occurred while creating the User.",
        });
    }
}

module.exports = createUser;
