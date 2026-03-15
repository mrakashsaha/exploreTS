"use strict";
// Task 9: Optional Chaining
// Objective: Use optional chaining with nested objects.
Object.defineProperty(exports, "__esModule", { value: true });
const getEmployeeCity = (employee) => {
    return employee?.address?.city;
};
console.log(getEmployeeCity({ name: "Akash", address: { house: "AA", city: "dhaka", road: "32A" }, email: "mr.akashsaha@gmail.com" }));
//# sourceMappingURL=task9.js.map