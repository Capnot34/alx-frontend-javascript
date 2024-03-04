export default function createReportObject(employeesList) {
  // Create an object to store department names and employees
  const allEmployees = {...employeesList};

  // Define a method property to get the number of departments
  const getNumberOfDepartments = () => Object.keys(allEmployees).length;

  // Return an object with allEmployees and getNumberOfDepartments method
  return {
    allEmployees,
    getNumberOfDepartments
  };
}
