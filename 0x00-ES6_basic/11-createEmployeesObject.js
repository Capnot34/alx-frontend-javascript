export default function createEmployeesObject(departmentName, employees) {
  // Create an object with the specified format
  const employeesObject = {};

  // Use the provided departmentName as a dynamic property name
  employeesObject[departmentName] = employees;

  // Return the created object
  return employeesObject;
}
