// Import the express module to create an HTTP server
const express = require('express');

// Create an Express application instance
const app = express();

// Start the server and listen on port 1245
app.listen(1245, () => {
  // Log a message when the server is ready
  console.log('API available on localhost port 1245');
});

// Define a route for the root URL that sends a welcome message
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Export the app for use in other modules (e.g., for testing)
module.exports = app;
