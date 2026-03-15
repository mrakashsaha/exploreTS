"use strict";
// Task 16: Utility Types and Keyof Constraints
// Objective: Access object properties dynamically using keyof.
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: "Akash",
    email: "mr.akashsaha",
};
const getValues = (obj, key) => {
    return obj[key];
};
console.log(getValues({ age: 56 }, "age"));
//# sourceMappingURL=task16.js.map