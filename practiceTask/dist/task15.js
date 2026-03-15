"use strict";
//  Type Guards
// Objective: Create custom type guards for more accurate type checking.
Object.defineProperty(exports, "__esModule", { value: true });
// Instructions:
// Write a function isString(value: unknown): value is string that checks if a value is a string.
// Use this in another function printUpperCase(value: unknown): void that prints the value in uppercase if it’s a string.
const isString = (value) => {
    return typeof value === "string";
};
const printUpperCase = (value) => {
    if (isString(value)) {
        const upperCaseValue = value.toUpperCase();
        console.log(upperCaseValue);
    }
    else {
        console.log("The value is not string");
    }
};
printUpperCase("Akash Bhai");
//# sourceMappingURL=task15.js.map