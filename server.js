// Import the dotenv package
require("dotenv").config();
// Import required packages
const express = require('express'); // Import express
const dbConnect = require('./config/database'); // Import the function that connects to MongoDB


// Create an Express application
const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies

// API routes
const userRoutes = require('./routes/router'); // Import your router
app.use('/api/v1', userRoutes); // Mount your router under the /api prefix

// Start the server
const PORT = process.env.PORT || 5000; // Load port from environment variables or default to 5000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


//connect to the database
dbConnect();

//default Route
app.get("/", (request,response) => {
    response.send(`<h1> This is my HOMEPAGE </h1>`);
})

