//index.js - A simple ES6 application
const displayStudents = () => {
  // Sample data - using ES6 class
  class Student {
    constructor(name, grade) {
      this.name = name;
      this.grade = grade;
    }

    getInfo() {
      return `${this.name} has achieved grade ${this.grade}`;
    }
  }

  // Create students using ES6 syntax
  const students = [
    new Student('John', 'A'),
    new Student('Jane', 'B+'),
    new Student('Bob', 'A-'),
  ];

  // Using ES6 features: template literals, arrow functions, array methods
  console.log(`===== STUDENT REPORT =====`);
  
  students.forEach(student => {
    console.log(`- ${student.getInfo()}`);
  });

  // Using object destructuring
  const { length } = students;
  console.log(`Total students: ${length}`);

  // Using ES6 Map to calculate grade distribution
  const gradeMap = new Map();
  students.forEach(({ grade }) => {
    const count = gradeMap.get(grade) || 0;
    gradeMap.set(grade, count + 1);
  });

  console.log('\nGrade distribution:');
  gradeMap.forEach((count, grade) => {
    console.log(`${grade}: ${count} student(s)`);
  });
};

// Call the function
displayStudents();

// Export the function
module.exports = displayStudents;
