
// Import the file system module to read files
const fs = require('fs');

/**
 * Reads a CSV database file and groups students by their field of study
 * @param {string} path - The path to the CSV file
 * @returns {Promise} - A promise that resolves to an object with fields as keys and arrays of student firstnames as values
 */
export default function readDatabase(path) {
  return new Promise((resolve, reject) => {
    // Read the file asynchronously with UTF-8 encoding
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        // If there's an error reading the file, reject the promise
        reject(Error('Cannot load the database'));
      } else {
        // Split the file content by newlines and filter out empty lines
        // Extract the first line as headers and the rest as data lines
        const [headerLine, ...lines] = data.split('\n').filter((line) => line.length > 0);
        
        // Split the header line by commas to get column names
        const headers = headerLine.split(',');

        // Convert each data line into an object using headers as keys
        const listObj = lines.map((line) => 
          line.split(',').reduce((object, currentValue, index) => 
            Object.assign(object, { [headers[index]]: currentValue }), {}
          )
        );

        // Group students by their field of study
        // Create an object where keys are fields and values are arrays of student firstnames
        const groupByField = listObj.reduce((res, currentValue) => {
          // Initialize the field array if it doesn't exist
          res[currentValue.field] = res[currentValue.field] || [];
          // Add the student's firstname to the appropriate field array
          res[currentValue.field].push(currentValue.firstname);
          return res;
        }, {});
        
        // Resolve the promise with the grouped data
        resolve(groupByField);
      }
    });
  });
}
