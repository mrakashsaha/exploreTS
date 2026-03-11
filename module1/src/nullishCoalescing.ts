// ternary operator

const age : number = 18;

if (age>=18) {
    console.log("adult");
}

else {
    console.log("Not adult")
}



const isAdult : string = age >=18 ? "Adult": "Not Adult"

console.log({isAdult})


// Nullish colaescing operator

// if we want to set a defult value for null / undefined value for a variable then we may use Nullish Colaescing operator



const isAuthenticated = "";

const result1= isAuthenticated ?? "Guest" // working for null or undefined value only
const result2= isAuthenticated ? isAuthenticated : "Guest"

console.log({result1, result2})


type User = {
    name: string;
    address: {
        presentAddress: {
            road: string;
            city: string;
            district: string;
        }
        permanantAddress?: {
            road: string;
            city: string;
            district: string;
        }
        
    }
}


const user: User = {
    name: "Akash Kumar Saha",
    address: {
        presentAddress: {
            road: "Old thana road",
            city: "NOrth Badda",
            district: "Dhaka"
        }
    }
}


const permanentAddress = user?.address?.permanantAddress ?? "No Permanent Adress Found";

console.log({permanentAddress})