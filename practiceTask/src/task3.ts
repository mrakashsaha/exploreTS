// Task 3: Object Types, Type Alias, & Literal Types
// Objective: Define a structured Person object using Type Aliases.

// Instructions:

// Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.


type Person = {
    name: string;
    address: string;
    hairAndEyeColor: {
        hair: string;
        eye: string;
    }
    incomeAndExpanse: {
        income: number;
        expanse: number;
    }
    hobbies: string;
    familyMember: number;
    job: string;
    skills: string [];
    maritalStatus: "married" | "unmarried";
    friends: string [];

}


const mrAkash : Person = {
    name: "Akash Kumar Saha",
    address: "Kushtia",
    familyMember: 4,
    friends: ["Priyanka", "Rajon", "Shofiq"],
    hairAndEyeColor: {
        hair: "black",
        eye: "brown",
    },
    hobbies: "Watching Reels",
    incomeAndExpanse: {
        income: 20000,
        expanse: 20000,
    },
    job: "Web Developer",
    maritalStatus: "unmarried",
    skills: ["react.js", "typeScript", "javaScript"],
}
