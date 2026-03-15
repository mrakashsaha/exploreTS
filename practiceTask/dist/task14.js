"use strict";
// Task 14: Asynchronous TypeScript and Type Aliases
// Objective: Simulate an asynchronous operation with TypeScript.
Object.defineProperty(exports, "__esModule", { value: true });
// Instructions:
// Write an asynchronous function that:
// Simulates fetching user data (containing name and age).
// Returns the data after a short delay.
const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    return await result;
};
console.log(fetchData());
//# sourceMappingURL=task14.js.map