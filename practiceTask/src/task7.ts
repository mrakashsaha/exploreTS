// Task 7: Type Assertion and Narrowing
// Objective: Write a function that behaves differently based on the input type.

// Instructions:

// Create a function that accepts a parameter of type string | number.
// The function should:
// Return the length if the input is a string.
// Return the square if the input is a number.


const myFuc = (input: string | number) : number => {

    return typeof input === "string" ? input.length : input*input;
}


console.log(myFuc(54));
console.log(myFuc("54") as number);