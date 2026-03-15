// Task 13: Generics with Functions and Interfaces
// Objective: Use generics to handle different types.

// Instructions:

// Create a generic function that:
// Accepts an array of any type.
// Returns a new array with duplicate values removed.




const dupliRemover = <T> (array: T[]) => {

    const uniqueArray = [...new Set (array)];

    return(uniqueArray);

}

console.log(dupliRemover<number>([1, 2, 1, 3, 5]))
console.log(dupliRemover<string>(["Akash", "Priyanka", "Tanvir", "Akash"]));