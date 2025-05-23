// Import the http module to create an HTTP server
const http = require('http');
// Import the asynchronous function to count students from a CSV file
const countStudents = require('./3-read_file_async');

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set the response header to indicate plain text content and status 200 (OK)
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  const { url } = req;
  // Get the path to the database file from command line arguments
  const path = process.argv[2];
  // If the root URL is requested, respond with a welcome message
  if (url === '/') {
    res.end('Hello Holberton School!');
  // If the /students URL is requested, display the list of students
  } else if (url === '/students') {
    const msg = 'This is the list of our students\n';
    countStudents(path)
      .then((students) => {
        let output = '';
        if (Array.isArray(students)) {
          output = students.join('\n');
        } else if (typeof students === 'string') {
          output = students;
        } else {
          output = '';
        }
        res.end(`${msg}${output}`);
      })
      .catch((err) => {
        res.end(`${msg}${err.message}`);
      });
  } else {
    // For any other URL, respond with Not Found
    res.end('Not Found');
  }
});

// Start the server and listen on port 1245
app.listen(1245);

// Export the app for use in other modules (e.g., for testing)
module.exports = app;
