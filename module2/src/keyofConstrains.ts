// Generic constrains with keyof operator


type Vehicle = {
    bike: string;
    car: string;
    ship: string;
}


type Owner = "bike" | "car" | "ship";

const tanvir: Owner = "bike";


type Owner2 = keyof Vehicle;

const akash: Owner = "car";


const user = {
    name: "Akash",
    age: 22,
    address: "Dhaka",
}

function getPropertyValue <X, Y extends keyof X> (obj: X, key: Y) {
    return obj[key]
}


const result1= getPropertyValue(user, "name");

console.log (result1)