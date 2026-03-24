"use strict";
// Problem 3:
// Description: Create a generic function that concatenates multiple arrays of the same type using rest parameters.
Object.defineProperty(exports, "__esModule", { value: true });
// Function Signature:
// function concatenateArrays<T>(...arrays: T[][]): T[]
// Example:
// concatenateArrays(["a", "b"], ["c"]);       // Output: ["a", "b", "c"]
// concatenateArrays([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]
const concatenateArrays = (...arrays) => {
    let newArray = [];
    arrays.forEach(element => {
        newArray = newArray.concat(element);
    });
    return newArray;
};
console.log(concatenateArrays(["a", "b"], ["c"]));
//# sourceMappingURL=problem3.js.map