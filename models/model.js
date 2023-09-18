const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
const userSchema = new Schema({
    name: {
      type: String,
      required: true, // Name is required
    },
    email: {
      type: String,
      required: true, // Email is required
      unique: true,   // Email should be unique
    },
    age: {
      type: Number,
      default: 18,    // Default age is 18
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
