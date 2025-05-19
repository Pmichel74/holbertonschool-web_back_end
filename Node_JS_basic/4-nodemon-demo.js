/**
 * ES6 Features with Nodemon auto-reload
 * This file will be monitored by Nodemon for changes
 */

// ES6 imports (Node.js v20 supports ECMAScript modules)
const { Student, displayStudentInfo } = require('./3-es6-features');

// Create a database simulation class using ES6 features
class StudentDatabase {
  constructor() {
    this.students = [];
    this.lastId = 0;
  }

  addStudent(firstName, lastName) {
    this.lastId++;
    const newStudent = new Student(this.lastId, firstName, lastName);
    this.students.push(newStudent);
    return newStudent;
  }

  getAllStudents() {
    return [...this.students]; // Using spread operator to return a copy
  }

  findStudentById(id) {
    return this.students.find(student => student.id === id);
  }

  generateReport() {
    console.log('===== STUDENT DATABASE REPORT =====');
    console.log(`Total students: ${this.students.length}`);
    
    if (this.students.length > 0) {
      console.log('\nStudent list:');
      this.students.forEach(student => {
        displayStudentInfo(student);
      });
    }
  }
}

// Initialize the database
const db = new StudentDatabase();

// Add students
db.addStudent('John', 'Doe');
db.addStudent('Jane', 'Smith');
db.addStudent('Michael', 'Johnson');
db.addStudent('Emily', 'Williams');

// Generate report
db.generateReport();

// This message will help you see when Nodemon reloads
console.log('\n[Server running - File was modified and automatically reloaded!]');

// Export the database (for testing purposes)
module.exports = db;
