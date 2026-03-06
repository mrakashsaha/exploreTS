// Learning function

// normal function with default value of num1

function add(num1: number = 2, num2: number): number {
    return num1 + num2;
}

console.log(add(45, 56));


// arrow function

const add1 = (num1: number, num2: number): number => num1 + num2;


// if a function is decleared in a object then it is called as a method


const poorUser: {
 name: string;
 balance: number;
 addBalance: (amount: number) => string;
} = {
    name: "Akash",
    balance: 10,

    // Annonimous normal function
    addBalance(amount: number): string {
        return `My new balance is : ${this.balance + amount}`;
    }

}



console.log(poorUser.addBalance(56));



const arr :  number [] = [12, 213, 12, 11, 12];

const newArray : number [] = arr.map((i:number) : number => i*i)