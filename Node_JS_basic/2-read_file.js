const fs = require('fs');

function countStudents(path) {
  try {
    const fileContent = fs.readFileSync(path, 'utf-8');
    const lines = fileContent.split('\n').filter((line) => line.trim() !== '');
    
    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }
    
    const students = {};
    let totalStudents = 0;
    
    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i];
      if (line) {
        totalStudents += 1;
        const fields = line.split(',');
        const firstName = fields[0];
        const field = fields[3];
        
        if (!students[field]) {
          students[field] = [];
        }
        
        students[field].push(firstName);
      }
    }
    
    console.log(`Number of students: ${totalStudents}`);
    
    for (const field in students) {
      if (Object.prototype.hasOwnProperty.call(students, field)) {
        console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
