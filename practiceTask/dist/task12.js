"use strict";
// Task 12: Never Type
// Objective: Use the never type for functions that don’t return.
Object.defineProperty(exports, "__esModule", { value: true });
// Instructions:
// Write a function handleError that:
// Accepts a message: string.
// Throws an error with the given message.
// Use the never return type to indicate that this function never returns.
const handleError = (message) => {
    throw new Error(message);
};
handleError("Error is occured due to a function");
//# sourceMappingURL=task12.js.map