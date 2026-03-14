// Utility types




type Person = {
    name: string; 
    age: number;
    email ? : string;
    contactNo: string;
}



//pick utility type
type Name = Pick<Person, "name">
type NameAge = Pick<Person, "name" | "age">


// omit utility type. reverse of pick type
type ContactInfo = Omit<Person, "name" | "age">


// required utility 
type AllFields = Required<Person>

// Partial Utility -> Opposit of required.
type PartialField = Partial<Person>


// Readonly Utility


type PersonReadonly = Readonly<Person>

const Person1 : Person = {
     name: "Akash",
     age: 20,
    
     contactNo: "017556497889",
}
const Person2 : PersonReadonly = {
     name: "Akash",
     age: 20,
     contactNo: "017556497889",
}

Person1.name = "Tanvir";
// Person2.name = "Tanvir";  cannot assing value as readonly.


// Record

type MyObj = {
    a: string;
    b: string;
}

type MyObj1 = Record<string, string>

const obj : MyObj = {
    a: "akash",
    b: "Tanvir",
}


const obj1 : MyObj1 = {
    a: "akash",
    b: "Tanvir",
    c: "New Name",
    // d: 45 GENERATE ERROR HERE
}   

const EmptyObj: {} = {};

const EmptyObj2: Record<string, unknown> = {};