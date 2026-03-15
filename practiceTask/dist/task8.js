"use strict";
// Task 8: Intersection Types
// Objective: Practice using intersection types.
Object.defineProperty(exports, "__esModule", { value: true });
const akash = {
    name: "Akash",
    email: "mr@gmail.com",
    adminLevel: 4,
};
const describeAdmin = (user) => {
    return `${user.name} email: ${user.email} with admin level ${user.adminLevel}`;
};
console.log(describeAdmin(akash));
//# sourceMappingURL=task8.js.map