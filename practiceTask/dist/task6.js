"use strict";
// Task 6: Spread and Rest Operators, Destructuring
// Objective: Write a function that uses the rest operator for variable-length arguments.
Object.defineProperty(exports, "__esModule", { value: true });
// Instructions:
// Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments.
const arraySum = (...arr) => {
    // let sum : number = 0;
    // arr.forEach(element => {
    //    sum = sum + element; 
    // });
    // return sum;
    return arr.reduce((sum, num) => sum + num, 0);
};
arraySum(1, 2, 3, 4);
//# sourceMappingURL=task6.js.map