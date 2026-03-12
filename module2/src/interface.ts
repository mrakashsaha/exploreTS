// learn about interface | cousin of type


type User1 = {
    name: string;
    age: number;
}

type UserWithRole = User1 & {role: string}


const myUserX : UserWithRole = {
    name: "Akash",
    role: "Frontend Developer",
    age: 55
}


const myUser : User1 = {
    name: "Akash Kumar Saha",
    age: 22,
}


interface User2 {
    name: string;
    age: number
}

interface UserWithRole2 extends User2 {
    role: string;
}

interface UserWithRole3 extends User1 {
    role: string;
}


const myUser2 : User2 = {
    name: "Akash 2",
    age: 45,

}


const myUserY : UserWithRole2 = {
    name: "Akash",
    age: 45, 
    role: "Fronend Developer"
}

// Main Difference between type alias and interface
// We can use type alias in Premetive data type.



type RollNumber = number; 


// Array canbe declear with interface

type RollNum1 = number [];

interface RollNumber2 {
    [index: number] : number
}

const rollNumber1 : RollNum1 = [1, 2, 3, 4, 5]
const rollNumber2 : RollNumber2 = [1, 2, 3, 4, 5]


// Function can be declear with interface as well

type Add = (a: number, b: number) => number;

interface Add2 {
    (num1: number, num2: number) : number;
}

const add : Add = (x, y) => x+y;
const add2 : Add2= (x, y) => x+y;