// typeof --> type gurd


type AlphaNumeric = string | number;


const add = (param1: AlphaNumeric, param2: AlphaNumeric) : AlphaNumeric => {


    if (typeof param1 === "number" && typeof param2 === "number") {

        return param1 + param2;
    }

    else {
        return param1.toString() + param2.toString();  
    }

}


const result1 = add (2, 3);
const result2 = add ("2", 3);

console.log(result1, result2);


// in gurd => work inside the object only

type NormalUser = {
    name: string;
}

type AdminUser = {
    name: string;
    role: "admin";  // this property only admin has
}


const getUser = (user: NormalUser | AdminUser) => {

    // user.name here no role is available. so we using in gurd in next line to confirm that we are talking abut AmdinUserType

    if ("role" in user) {
        console.log(`${user.name} is ${user.role}`);
    }


    else {
        console.log(`${user.name} is not an admin`)
    }
}


const normalUser: NormalUser = {
    name: "Priyanka Acharjee",
}

const adminUser : AdminUser = {
    name: "Akash Kumar Saha",
    role: "admin",
}


getUser(normalUser);
getUser(adminUser);
