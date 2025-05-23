const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8', flag: 'r' }, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      // Split by lines and remove empty lines
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length <= 1) {
        console.log('Number of students: 0');
        resolve();
        return;
      }
      const students = {};
      const fieldOrder = [];
      let totalStudents = 0;
      // Iterate through lines starting from index 1 (skipping header)
      for (let i = 1; i < lines.length; i += 1) {
        const line = lines[i];
        if (line) {
          totalStudents += 1;
          const fields = line.split(',');
          const firstName = fields[0];
          const field = fields[3];
          if (!students[field]) {
            students[field] = [];
            fieldOrder.push(field);
          }
          students[field].push(firstName);
        }
      }
      console.log(`Number of students: ${totalStudents}`);
      for (const field of fieldOrder) {
        console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
      }
      resolve();
    });
  });
}

module.exports = countStudents;
