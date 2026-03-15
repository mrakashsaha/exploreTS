// Task 14: Asynchronous TypeScript and Type Aliases
// Objective: Simulate an asynchronous operation with TypeScript.

// Instructions:

// Write an asynchronous function that:
// Simulates fetching user data (containing name and age).
// Returns the data after a short delay.


type User = {
    name: string;
    age: number;
}

const fetchUser = async () : Promise<User> => {
    await new Promise(resolve => {
        setTimeout(resolve, 2000)
    })

    return {
        name: "Akash",
        age: 45,
    }

}


fetchUser().then(res=> console.log(res))