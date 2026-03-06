
const user : {
    company: "Anthopic"; // if a value beheave as a type then it is called literal type. 
    readonly firstName: string;
    middleName?: string; //optional type
    lastName: string;
    ifMarried: boolean;
} = {
    company: "Anthopic",
    firstName : "Akash",
    // middleName: "Kumar",
    lastName: "Saha",
    ifMarried: false,
}


// user.firstName =  not possible to assign value as it is readonly access modifier