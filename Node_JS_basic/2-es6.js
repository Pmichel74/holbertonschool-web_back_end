// ES6 features example
const countStudents = (students) => {
  // Arrow function
  console.log(`Number of students: ${students.length}`);
  
  // Template literals and destructuring
  const [firstStudent, ...otherStudents] = students;
  
  // Object property shorthand and method definition
  const report = {
    firstStudent,
    count: students.length,
    printSummary() {
      console.log(`First student: ${this.firstStudent}`);
      console.log(`Total students: ${this.count}`);
    }
  };
  
  // Class definition (ES6 feature)
  class StudentList {
    constructor(studentArray) {
      this.students = studentArray;
    }
    
    // Class method
    listAll() {
      // Arrow function with implicit return in map
      return this.students.map(student => `Student: ${student}`);
    }
  }
  
  const studentList = new StudentList(students);
  
  // Spread operator in console.log
  console.log(studentList.listAll().join(', '));
  
  // Object method invocation
  report.printSummary();
  
  return report;
};

// CommonJS export
module.exports = countStudents;
