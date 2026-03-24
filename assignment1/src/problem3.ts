// Problem 3:
// Description: Create a generic function that concatenates multiple arrays of the same type using rest parameters.

// Function Signature:

// function concatenateArrays<T>(...arrays: T[][]): T[]
// Example:

// concatenateArrays(["a", "b"], ["c"]);       // Output: ["a", "b", "c"]
// concatenateArrays([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]


const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    let newArray: T[] = [];

    arrays.forEach(element => {
        newArray = newArray.concat(element);
    });

    return newArray;
};


console.log(concatenateArrays<string>(["a", "b"], ["c"]));