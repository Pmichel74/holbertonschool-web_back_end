// Import the file system module
const fs = require('fs');

/**
 * Counts students from a CSV file
 * @param {string} path - Path to the CSV file
 * @throws {Error} - If the database cannot be loaded
 */
function countStudents(path) {
  try {
    // Read file synchronously
    const fileContent = fs.readFileSync(path, 'utf-8');
    // Split by lines and remove empty lines
    const lines = fileContent.split('\n').filter((line) => line.trim() !== '');
    
    // Validate the CSV has at least a header and one data row
    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }
    
    // Object to store students by field
    const students = {};
    let totalStudents = 0;
    
    // Iterate through lines starting from index 1 (skipping header)
    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i];
      if (line) {
        totalStudents += 1;
        // Parse the CSV line
        const fields = line.split(',');
        const firstName = fields[0];
        const field = fields[3];
        
        // Initialize the array for this field if it doesn't exist
        if (!students[field]) {
          students[field] = [];
        }
        
        // Add the student to the appropriate field
        students[field].push(firstName);
      }
    }
    
    // Display results
    console.log(`Number of students: ${totalStudents}`);
    
    // Print the number and list of students in each field
    for (const field in students) {
      // Check if the property belongs directly to the object, not from prototype chain
      if (Object.prototype.hasOwnProperty.call(students, field)) {
        console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
      }
    }
  } catch (err) {
    // If any error occurs, throw a new error with a generic message
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
