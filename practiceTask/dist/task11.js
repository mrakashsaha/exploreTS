"use strict";
// Task 11: Unknown Type
// Objective: Handle different types with the unknown type.
Object.defineProperty(exports, "__esModule", { value: true });
// Instructions:
// Write a function processData(data: unknown) that:
// Checks if data is a string and returns the uppercased version.
// If data is a number, returns the square of it.
const processdata = (data) => {
    return typeof data === "string" ? data.toUpperCase() : typeof data === "number" ? data * data : "Invalid Data";
};
console.log(processdata("new"));
console.log(processdata(2));
//# sourceMappingURL=task11.js.map