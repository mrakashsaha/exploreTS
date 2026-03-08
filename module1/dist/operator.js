"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// spread operator
const neighbors1 = ["Tanvir", "Abid", "Tushar", "Ashiq"];
const neighbors2 = ["Maghla", "Athoy", "Priyanka", "Dia"];
neighbors1.push(...neighbors2);
const mentors1 = {
    typeScript: "Mejba",
    redux: "Mir",
    dbsm: "Mizan"
};
const mentors2 = {
    prisma: "Firoz",
    next: "Tonmoy",
    cloud: "Nahid",
};
const mentorList = {
    mentors1, mentors2
};
const mentorList2 = Object.assign(Object.assign({}, mentors1), mentors2);
// console.log(mentorList)
console.log(mentorList2);
// rest operator
const greetFriends = (friend1, friend2, friend3) => {
    console.log(`Hi ${friend1}, Hello ${friend2} Whatsapp ${friend3}`);
};
greetFriends("Akash", "Tushar", "Sajib");
const greetFriends2 = (...friends) => {
    friends.forEach((friend) => console.log(`Hi ${friend}`));
};
greetFriends2("Akash", "Tushar", "Sajib");
//destructurting
//# sourceMappingURL=operator.js.map