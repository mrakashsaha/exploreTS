// spread operator
const neighbors1: string[]  = ["Tanvir", "Abid", "Tushar", "Ashiq"];
const neighbors2: string[]  = ["Maghla", "Athoy", "Priyanka", "Dia"];

neighbors1.push(...neighbors2);


const mentors1 = {
    typeScript: "Mejba",
    redux: "Mir",
    dbsm: "Mizan"
}


const mentors2 = {
    prisma: "Firoz",
    next: "Tonmoy",
    cloud: "Nahid",
}


const mentorList = {
    mentors1, mentors2
}


const mentorList2 = {
    ...mentors1, ...mentors2
}

// console.log(mentorList)
console.log(mentorList2)


// rest operator

const greetFriends = (friend1: string, friend2: string, friend3 : string) => {
    console.log (`Hi ${friend1}, Hello ${friend2} Whatsapp ${friend3}`)
}


greetFriends("Akash", "Tushar", "Sajib")



const greetFriends2 = (...friends : string []) => {
    friends.forEach((friend:string)=> console.log(`Hi ${friend}`))
}


greetFriends2("Akash", "Tushar", "Sajib")


//destructurting


// Object destructring

const user = {
    id: 345, 
    name: {
        firstName: "Akash",
        middleName: "Kumar",
        lastName: "Saha"
    },
    contactNo: "01758290000",
    address: "North Badda, Dhaka",
}


const {contactNo} = user;

const {name: {middleName : midName}} = user; // with name alias middlename as midName,
// const {name: {middleName}} = user;  // no name alias it will be consider as middleName as it is.

console.log(midName)


// array destructring

const myFriends : string [] = ["Mustak", "Shovon", "Rajon", "Mithun", "Monica"];

const [a, b, bestFriend] = myFriends;
const [, , bestFriend2, ...rest] = myFriends;


console.log(rest, bestFriend)