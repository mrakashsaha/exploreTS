"use strict";
// Task 14: Asynchronous TypeScript and Type Aliases
// Objective: Simulate an asynchronous operation with TypeScript.
Object.defineProperty(exports, "__esModule", { value: true });
const fetchUser = async () => {
    await new Promise(resolve => {
        setTimeout(resolve, 2000);
    });
    return {
        name: "Akash",
        age: 45,
    };
};
fetchUser().then(res => console.log(res));
//# sourceMappingURL=task14.js.map