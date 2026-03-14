"use strict";
// Task 5: Function Type
// Objective: Write a function that reverses a string.
Object.defineProperty(exports, "__esModule", { value: true });
// Instructions:
// Write a function reverseString that:
// Takes a single string argument.
// Returns the string in reverse order.
// Example:
// Input: "hello"
// Output: "olleh"
const reverseString = (input) => {
    const reverseTxt = input.split("").reverse().join("");
    return reverseTxt;
};
console.log(reverseString("hello"));
//# sourceMappingURL=task5.js.map