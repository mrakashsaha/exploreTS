// Task 11: Unknown Type
// Objective: Handle different types with the unknown type.

// Instructions:

// Write a function processData(data: unknown) that:
// Checks if data is a string and returns the uppercased version.
// If data is a number, returns the square of it.


const processdata = (data: unknown) : string | number | "Invalid Data" => {
    
    return typeof data === "string" ? data.toUpperCase() : typeof data === "number" ? data*data : "Invalid Data";
}


console.log(processdata("new"));
console.log(processdata(2));