/**
 * ES6 Features in Node.js
 * This file demonstrates ES6 features that are natively supported in modern Node.js
 */

// ES6 Class
class Student {
  constructor(id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Class method
  getFullName() {
    // Template literals
    return `${this.firstName} ${this.lastName}`;
  }

  // Getter
  get name() {
    return this.getFullName();
  }
}

// Arrow function
const displayStudentInfo = (student) => {
  console.log(`Student ID: ${student.id}, Name: ${student.name}`);
};

// Array of students
const students = [
  new Student(1, 'Alice', 'Johnson'),
  new Student(2, 'Bob', 'Smith'),
  new Student(3, 'Charlie', 'Brown')
];

// ES6 Array methods and arrow functions
console.log('===== STUDENT LIST =====');
students.forEach(student => displayStudentInfo(student));

// Object destructuring
console.log('\n===== USING DESTRUCTURING =====');
students.forEach(({ id, firstName, lastName }) => {
  console.log(`ID: ${id}, First name: ${firstName}, Last name: ${lastName}`);
});

// Array spread operator
const additionalStudents = [
  new Student(4, 'Diana', 'Prince'),
  new Student(5, 'Edward', 'Blake')
];
const allStudents = [...students, ...additionalStudents];

// Filter, map, and reduce methods
console.log('\n===== FILTERED STUDENTS =====');
const filteredStudents = allStudents.filter(student => student.id > 2);
filteredStudents.forEach(student => displayStudentInfo(student));

// Promise (ES6 feature)
console.log('\n===== ASYNC OPERATIONS =====');
const fetchStudentData = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const student = allStudents.find(s => s.id === id);
      if (student) {
        resolve(student);
      } else {
        reject(`Student with ID ${id} not found`);
      }
    }, 1000);
  });
};

// Using async/await with IIFE (Immediately Invoked Function Expression)
(async () => {
  try {
    console.log('Fetching student data...');
    const student = await fetchStudentData(3);
    console.log('Async operation completed successfully:');
    displayStudentInfo(student);
  } catch (error) {
    console.error('Error:', error);
  }
})();

// Export the Student class
module.exports = { Student, displayStudentInfo };
