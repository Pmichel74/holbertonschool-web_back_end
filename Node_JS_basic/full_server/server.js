// Import the router module that contains all route definitions
import router from './routes';

// Import Express framework for creating the web server
const express = require('express');

// Define the port number on which the server will listen
const port = 1245;

// Create an Express application instance
const app = express();

// Mount the router on the root path '/'
// This means all routes defined in the router will be accessible from the root
app.use('/', router);

// Start the server and listen on the specified port
app.listen(port);

// Export the app instance as the default export
// This allows other modules to import and use this server instance
export default app;
