type GenericArray = Array<number>;

type DynamicGeneric <T> = Array <T>


const rollNumbers: number[] = [2, 3, 22, 22];
const rollNumbers2: Array<number> = [2, 3, 22, 22];
const rollNumbers3: GenericArray = [2, 3, 22, 22];
const rollNumbers4: DynamicGeneric<number> = [2, 3, 22, 22];

const mentors : string [] = ["Mahbub", "Pasa", "Niloy"];
const mentors2 : Array<string> = ["Mahbub", "Pasa", "Niloy"];
const mentors3 : DynamicGeneric<string> = ["Mahbub", "Pasa", "Niloy"];

const boolArray: boolean [] = [true, false, true];
const boolArray2: Array <boolean> = [true, false, true];
const boolArray3: DynamicGeneric <boolean> = [true, false, true];


const user1 : DynamicGeneric<object> = [{name: "Akash", age: 56}, {name: "Tanvir", age: "56"},] // Not recomanded


const user2 : DynamicGeneric<{name: string, age: number}> = [{name: "Akash", age: 56}, {name: "Tanvir", age: 56},]


const add = (a: number, b: number) => a+b;


add (30, 30);



// Generic tuple

type GeneraticTuple <X, Y> = [X, Y]

const Couple : [string, string] = ["Akash", "Priya"]
const Couple2 : GeneraticTuple<string, string> = ["Akash", "Priya"]




const UserWithID: GeneraticTuple <number, {name: string, email: string}> = [1234, {name: "Akash", email: "akash@gmail.com"}]