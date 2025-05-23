// Import the http module to create an HTTP server
const http = require('http');

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set the response header to indicate plain text content and status 200 (OK)
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Write the response body
  res.write('Hello Holberton School!');
  // End the response
  res.end();
});

// Start the server and listen on port 1245
app.listen(1245);

// Export the app for use in other modules (e.g., for testing)
module.exports = app;
