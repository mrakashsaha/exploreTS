"use strict";
// Description: Create a function that filters an array of objects by the rating property, returning only items with a rating of 4 or more.
Object.defineProperty(exports, "__esModule", { value: true });
// Function Signature:
// function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]
// Example:
// const books = [
//   { title: "Book A", rating: 4.5 },
//   { title: "Book B", rating: 3.2 },
//   { title: "Book C", rating: 5.0 }
// ];
// filterByRating(books); 
// // Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
const filterByRating = (items) => {
    const result = items.filter(i => i.rating >= 4);
    return result;
};
console.log(filterByRating(books));
//# sourceMappingURL=problem2.js.map