export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
