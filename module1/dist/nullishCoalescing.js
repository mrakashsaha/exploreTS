"use strict";
// ternary operator
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const age = 18;
if (age >= 18) {
    console.log("adult");
}
else {
    console.log("Not adult");
}
const isAdult = age >= 18 ? "Adult" : "Not Adult";
console.log({ isAdult });
// Nullish colaescing operator
// if we want to set a defult value for null / undefined value for a variable then we may use Nullish Colaescing operator
const isAuthenticated = "";
const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest"; // working for null or undefined value only
const result2 = isAuthenticated ? isAuthenticated : "Guest";
console.log({ result1, result2 });
const user = {
    name: "Akash Kumar Saha",
    address: {
        presentAddress: {
            road: "Old thana road",
            city: "NOrth Badda",
            district: "Dhaka"
        }
    }
};
const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanantAddress) !== null && _b !== void 0 ? _b : "No Permanent Adress Found";
console.log({ permanentAddress });
//# sourceMappingURL=nullishCoalescing.js.map