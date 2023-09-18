// Import the dotenv package
require("dotenv").config();

// import the mongoose package, which allows us to work with MongoDB using JavaScript.
const mongoose = require("mongoose");

function dbConnect() {
  // Connect to MongoDB using mongoose.connect() method.
  // It takes two arguments: the connection string and an object of options.
  //  We will use the connection string from the .env file and pass in the options object.
  mongoose.connect(process.env.DataBaseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Check if the connection was successful or not
  const db = mongoose.connection;

  // If there was an error, log it to the console
  db.on("error", (err) => {
    console.log(`There was an error connecting to the database: ${err}`);
  });

  // If the connection was successful, log a success message to the console
  db.once("open", () => {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
  });
}

// Export the database connection for use in other parts of your application
module.exports = dbConnect;
