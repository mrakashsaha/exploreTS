"use strict";
// Task 2: Functions, Optional, and Literal Types
// Objective: Create a function with parameters and an optional literal type.
Object.defineProperty(exports, "__esModule", { value: true });
// Instructions:
// Define a function that takes:
// name (string)
// age (number)
// role (optional, with type 'admin' | 'user' | 'guest')
// The function should log these values or perform a basic action.
const user = (name, age, role) => {
    console.log(`Curent Login User: ${name} age: ${age} Role: ${role ?? "Not Defined"}`);
};
user("akash", 55);
//# sourceMappingURL=task2.js.map