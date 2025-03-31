export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }
  
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const studentGrades = newGrades.filter((grade) => grade.studentId === student.id);
      const grades = studentGrades.length > 0 ? studentGrades[0].grade : 'N/A';
      
      return {
        ...student,
        grade: grades,
      };
    });
}
