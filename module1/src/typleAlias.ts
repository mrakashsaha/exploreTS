
type Studnet = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    adress: string;
}


const student1 : {
    name: string;
    age: number;
    gender: string;
    contactNo: string;
    adress: string;
} = {
    name: "Akash",
    age: 52,
    gender: "male",
    contactNo: "017528545454", 
    adress: "dhaka"
}


const student2: Studnet = {
    name: "Tanvir",
    age: 74,
    gender: "male",
    adress: "Shariatpur"
}


type UserName = string;
type IsAdmin =  boolean;
const userName : UserName = "akash";
const isAdmin : IsAdmin = true;


type MyFuc= (x: number, y: number) => number;



const add : MyFuc = (a, b) => a+b;