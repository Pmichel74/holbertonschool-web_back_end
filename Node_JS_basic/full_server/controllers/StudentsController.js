
// Import the readDatabase function from utils to read and process the CSV file
import readDatabase from '../utils';

/**
 * Controller class that handles student-related HTTP requests
 * Contains static methods to handle different student endpoints
 */
class StudentsController {
  /**
   * Handles GET /students route
   * Returns all students grouped by their field of study
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   */
  static getAllStudents(req, res) {
    // Get the database file path from command line arguments
    const databaseFile = process.argv[2];
    
    // Read and process the database file
    readDatabase(databaseFile)
      .then((students) => {
        // Initialize the response text with a header
        let responseText = 'This is the list of our students\n';
        
        // Sort the fields alphabetically for consistent output
        const sortedFields = Object.keys(students).sort();

        // Iterate through each field and build the response text
        sortedFields.forEach((field) => {
          responseText += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
        });

        // Send successful response with the formatted student list
        res.status(200).send(responseText.trim());
      })
      .catch((err) => {
        // Handle database reading errors
        res.status(500).send('Cannot load the database');
      });
  }

  /**
   * Handles GET /students/:major route
   * Returns students filtered by a specific major (CS or SWE)
   * @param {Object} req - Express request object (contains req.params.major)
   * @param {Object} res - Express response object
   */
  static getAllStudentsByMajor(req, res) {
    // Get the database file path from command line arguments
    const databaseFile = process.argv[2];
    
    // Extract the major parameter from the URL
    const major = req.params.major;

    // Validate that the major is either CS or SWE
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    // Read and process the database file
    readDatabase(databaseFile)
      .then((students) => {
        // Check if the major exists in the database
        if (!students[major]) {
          // If no students found for this major, return empty list
          res.status(200).send('List:');
        } else {
          // Return the list of students for the specified major
          res.status(200).send(`List: ${students[major].join(', ')}`);
        }
      })
      .catch((err) => {
        // Handle database reading errors
        res.status(500).send('Cannot load the database');
      });
  }
}

// Export the StudentsController class as the default export
// This allows other modules to import and use this controller
export default StudentsController;
