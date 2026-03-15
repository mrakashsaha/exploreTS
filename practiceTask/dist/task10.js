"use strict";
// Task 10: Nullish Coalescing
// Objective: Handle null and undefined values using nullish coalescing.
Object.defineProperty(exports, "__esModule", { value: true });
// Instructions:
// Write a function getDisplayName(name: string | null | undefined): string that returns "Anonymous" if name is null or undefined.
const getDisplayName = (name) => {
    return name ?? "Anonymous";
};
console.log(getDisplayName("Akash"));
console.log(getDisplayName(undefined));
console.log(getDisplayName(null));
//# sourceMappingURL=task10.js.map