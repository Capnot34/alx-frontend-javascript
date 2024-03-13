function getListStudentIds(studentList) {
  // Check if the argument is an array
  if (!Array.isArray(studentList)) {
    return [];
  }

  // Use map function to extract ids from each object
  return studentList.map((student) => student.id);
}

export default getListStudentIds;
