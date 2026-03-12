"use strict";
// Generic constrains with keyof operator
Object.defineProperty(exports, "__esModule", { value: true });
const tanvir = "bike";
const akash = "car";
const user = {
    name: "Akash",
    age: 22,
    address: "Dhaka",
};
function getPropertyValue(obj, key) {
    return obj[key];
}
const result1 = getPropertyValue(user, "name");
console.log(result1);
//# sourceMappingURL=keyofConstrains.js.map