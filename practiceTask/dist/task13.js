"use strict";
// Task 13: Generics with Functions and Interfaces
// Objective: Use generics to handle different types.
Object.defineProperty(exports, "__esModule", { value: true });
// Instructions:
// Create a generic function that:
// Accepts an array of any type.
// Returns a new array with duplicate values removed.
const dupliRemover = (array) => {
    const uniqueArray = [...new Set(array)];
    return (uniqueArray);
};
console.log(dupliRemover([1, 2, 1, 3, 5]));
console.log(dupliRemover(["Akash", "Priyanka", "Tanvir", "Akash"]));
//# sourceMappingURL=task13.js.map