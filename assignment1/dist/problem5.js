"use strict";
// Description: Write a function that takes a string | number and returns:
Object.defineProperty(exports, "__esModule", { value: true });
// The length if it's a string
// The number multiplied by 2 if it's a number
// Function Signature:
// function processValue(value: string | number): number
// Example:
// processValue("hello"); // Output: 5
// processValue(10);      // Output: 20
const processValue = (value) => {
    return typeof value === "string" ? value.length : value * 2;
};
console.log(processValue("hello")); // Output: 5
console.log(processValue(10)); // Output: 20
//# sourceMappingURL=problem5.js.map