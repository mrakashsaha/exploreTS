// Task 12: Never Type
// Objective: Use the never type for functions that don’t return.

// Instructions:

// Write a function handleError that:
// Accepts a message: string.
// Throws an error with the given message.
// Use the never return type to indicate that this function never returns.


const handleError = (message: string) : never => {
    throw new Error(message);
}


handleError("Error is occured due to a function");