"use strict";
// Description: Create a function that takes a string and an optional boolean.
Object.defineProperty(exports, "__esModule", { value: true });
// If the boolean is true or not provided, return the string in uppercase.
// If the boolean is false, return the string in lowercase.
// Function Signature:
// function formatString(input: string, toUpper?: boolean): string
// Example:
// formatString("Hello");          // Output: "HELLO"
// formatString("Hello", true);   // Output: "HELLO"
// formatString("Hello", false);  // Output: "hello"
const formatString = (input, toUpper) => {
    return toUpper === false ? input.toLowerCase() : input.toUpperCase();
};
console.log(formatString("Hello"));
console.log(formatString("Hello", true));
console.log(formatString("Hello", false));
//# sourceMappingURL=problem1.js.map