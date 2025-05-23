const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(
      path,
      { encoding: 'utf8', flag: 'r' },
      (err, data) => {
        if (err) {
          reject(Error('Cannot load the database'));
          return;
        }
        const response = [];
        let msg;

        const content = data.split('\n');

        let students = content.filter((item) => item);

        // Split each line into an array of values (CSV columns)
        students = students.map((item) => item.split(','));

        // Calculate the number of students (excluding the header)
        const studentSize = students.length ? students.length - 1 : 0;
        msg = `Number of students: ${studentSize}`;
        console.log(msg);

        // Store the summary message in the response array
        response.push(msg);

        // Object to group students by their field
        const fields = {};
        // Loop through each student (skip header at index 0)
        for (const i in students) {
          if (i !== 0) {
            // Initialize the array for the field if it doesn't exist
            if (!fields[students[i][3]]) fields[students[i][3]] = [];

            // Add the student's first name to the corresponding field
            fields[students[i][3]].push(students[i][0]);
          }
        }

        // Remove any accidental 'field' property (from header)
        delete fields.field;

        // For each field, print and store the number and list of students
        for (const key of Object.keys(fields)) {
          msg = `Number of students in ${key}: ${fields[key].length
          }. List: ${fields[key].join(', ')}`;

          console.log(msg);

          response.push(msg);
        }
        // Resolve the promise with the response array
        resolve(response);
      },
    );
  });
}

module.exports = countStudents;
