"use strict";
// type assertion
Object.defineProperty(exports, "__esModule", { value: true });
// As a developer I understand type better than typescript then it is type assertion.
let anything;
anything = "Next Level Web Developer";
// anything = 566;
const x = anything.charAt(5);
console.log(x);
const kgToGram = (value) => {
    if (typeof value === "string") {
        const convertedValue = parseFloat(value);
        return `Converted Value is ${convertedValue * 1000}`;
    }
    else if (typeof value === "number") {
        return value * 1000;
    }
};
const result1 = kgToGram("45");
const result2 = kgToGram(45);
console.log({ result1, result2 });
//# sourceMappingURL=typeAssertion.js.map