# ES6 Classes Project

This project focuses on implementing classes and understanding various concepts of object-oriented programming in JavaScript, particularly ES6 classes. Below are the tasks and a brief overview of what each task entails:

## Overview
The project involves creating various classes and implementing different features using ES6 classes. It covers topics such as defining classes, adding methods, working with static methods, extending classes, and implementing inheritance.

## Tasks

1. **ClassRoom Implementation**
   - Implement a class named `ClassRoom` that accepts a maximum number of students.
   
2. **Make Classrooms**
   - Initialize an array of `ClassRoom` objects with predefined sizes.
   
3. **HolbertonCourse Class**
   - Implement a class named `HolbertonCourse` with attributes like name, length, and students.
   - Implement getters and setters for each attribute.
   
4. **Currency Class**
   - Implement a class named `Currency` with code and name attributes.
   - Implement getters and setters for each attribute.
   - Implement a method to display the full currency.
   
5. **Pricing Class**
   - Implement a class named `Pricing` with amount and currency attributes.
   - Implement getters and setters for each attribute.
   - Implement a method to display the full price.
   - Implement a static method to convert prices.
   
6. **Building Class**
   - Implement an abstract class named `Building` with a square footage attribute.
   - Implement a getter for the square footage attribute.
   - Ensure that any class extending `Building` must implement an evacuation warning message.
   
7. **SkyHighBuilding Class**
   - Extend the `Building` class to create `SkyHighBuilding` with additional attributes like floors.
   - Implement getters for each attribute.
   - Override the evacuation warning message method.
   
8. **Airport Class**
   - Implement a class named `Airport` with name and code attributes.
   - Implement getters for each attribute.
   - Override the default string description of the class.
   
9. **HolbertonClass and StudentHolberton Classes**
   - Implement classes for HolbertonClass and StudentHolberton with proper attribute management and methods.
   - Resolve hoisting issues in the provided code.
   
10. **Car Class**
    - Implement a class named `Car` with brand, motor, and color attributes.
    - Implement a method to clone a car object.

## Learning Objectives
By completing this project, you should be able to:

- Define classes in JavaScript ES6
- Add methods to a class
- Understand and implement static methods in a class
- Extend a class from another
- Implement inheritance and abstract classes
- Solve issues related to class hoisting
- Implement cloning of objects

## Setup
To run the project, follow these steps:
1. Install NodeJS 12.11.x
2. Install Jest, Babel, and ESLint by running `npm install` in your project directory.

## Usage
- All files should have a `.js` extension.
- Run tests using Jest and ESLint by running `npm run test`.
- Verify the entire project using `npm run full-test`.

## Resources
- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Metaprogramming](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming)

