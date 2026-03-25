"use strict";
// Description: Define an interface Product and create a function to find the product with the highest price in an array. If the array is empty, return null.
Object.defineProperty(exports, "__esModule", { value: true });
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];
const products2 = [];
const getMostExpensiveProduct = (products) => {
    if (products.length === 0) {
        return null;
    }
    else {
        const result = products.reduce((acc, current) => acc.price < current.price ? current : acc);
        return result;
    }
};
console.log(getMostExpensiveProduct(products));
console.log(getMostExpensiveProduct(products2));
//# sourceMappingURL=problem6.js.map