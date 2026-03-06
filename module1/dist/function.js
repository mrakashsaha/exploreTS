"use strict";
// Learning function
Object.defineProperty(exports, "__esModule", { value: true });
// normal function with default value of num1
function add(num1 = 2, num2) {
    return num1 + num2;
}
console.log(add(45, 56));
// arrow function
const add1 = (num1, num2) => num1 + num2;
// if a function is decleared in a object then it is called as a method
const poorUser = {
    name: "Akash",
    balance: 10,
    // Annonimous normal function
    addBalance(amount) {
        return `My new balance is : ${this.balance + amount}`;
    }
};
console.log(poorUser.addBalance(56));
//# sourceMappingURL=function.js.map