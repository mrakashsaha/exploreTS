// Task 16: Utility Types and Keyof Constraints
// Objective: Access object properties dynamically using keyof.

// Instructions:

// Create a function that:
// Takes an object and a key.
// Returns the property value from the object based on the provided key.
// Use keyof to constrain the key to valid properties of the object.

type User = {
    name: string;
    email: string;
}

const user : User = {
    name: "Akash",
    email: "mr.akashsaha",
}


const getValues = <X, T extends keyof X> (obj: X, key: T) => {

    return obj[key]

}

console.log(getValues({age: 56}, "age"))

