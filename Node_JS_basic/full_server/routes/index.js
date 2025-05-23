
// Import controllers that handle the business logic for different routes
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

// Import Express framework to create router
const express = require('express');

// Create a new Express router instance to define routes
const router = express.Router();

// Define the homepage route
// GET / - Returns the homepage content
router.get('/', AppController.getHomepage);

// Define the students route
// GET /students - Returns all students grouped by field
// The third command line argument (process.argv[2]) is passed as the database file path
router.get('/students', (req, res) => {
  StudentsController.getAllStudents(req, res, process.argv[2]);
});

// Define the students by major route
// GET /students/:major - Returns students filtered by a specific major/field
// :major is a route parameter that will be available in req.params.major
// The database file path is also passed from command line arguments
router.get('/students/:major', (req, res) => {
  StudentsController.getAllStudentsByMajor(req, res, process.argv[2]);
});

// Export the router as the default export
// This allows the server.js file to import and use these routes
export default router;
