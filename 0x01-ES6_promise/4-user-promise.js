function signUpUser(firstName, lastName) {
  return promise.resolve({
    firstName: `${firstName}`,
    lastName: `${lastName}`,
  });
}

export default signUpUser;
