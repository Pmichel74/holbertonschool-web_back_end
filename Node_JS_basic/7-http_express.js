// Import the express module to create an HTTP server
const express = require('express');
const countStudents = require('./3-read_file_async');

// Create an Express application instance
const app = express();

// Define a route for the root URL that sends a welcome message
app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

// Define a route for /students that displays the list of students
app.get('/students', async (req, res) => {
  res.set('Content-Type', 'text/plain');
  const path = process.argv[2];
  const msg = 'This is the list of our students\n';

  // Capture console.log output
  const originalLog = console.log;
  let output = '';
  console.log = (text) => {
    output += `${text}\n`;
  };

  try {
    await countStudents(path);
    // Restore original console.log
    console.log = originalLog;
    res.send(`${msg}${output}`);
  } catch (err) {
    // Restore original console.log
    console.log = originalLog;
    res.send(`${msg}${err.message}`);
  }
});

// Start the server and listen on port 1245
app.listen(1245);

// Export the app for use in other modules (e.g., for testing)
module.exports = app;
