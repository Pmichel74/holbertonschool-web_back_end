// Import the express module to create an HTTP server
const MyExpress = require('express');
const countStudents = require('./3-read_file_async');

// Create an Express application instance
const app = MyExpress();

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
  if (path) {
    try {
      const students = await countStudents(path);
      res.send(`${msg}${students.join('\n')}`);
    } catch (err) {
      res.send(`${msg}${err.message}`);
    }
  } else {
    res.send(`${msg}Cannot load the database`);
  }
});

// Start the server and listen on port 1245
app.listen(1245);

// Export the app for use in other modules (e.g., for testing)
module.exports = app;
