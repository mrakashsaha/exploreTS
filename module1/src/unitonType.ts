type frontendDev = "basic Developer" | "advanced Developer";
type fullStackDev = "basicFull Stack" | "advanced FullStack";

const newDeveloper : frontendDev = "advanced Developer";

type Developer = frontendDev | fullStackDev;


type User = {
    name: string;
    email: string;
    gender: "male" | "female";
    bloodGroup: "A+" | "B+" | "O+"
}


const myUser : User = {
    name: "Akash Kumar Saha",
    email: "mr.akashsaha@gmail.com",
    gender: "female",
    bloodGroup: "B+",
}


type FrontendDeveloper = {
    skills: string [];
    designation1: "Fronend Developer";

}

type BackendDeveloper = {
    skills: string [];
    designation2: "Backend Developer";

}

type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

const myDeveloper: FullStackDeveloper = {
    skills: ["HTML", "CSS", "TailwindCSS", "ReactJS"],
    designation1: "Fronend Developer",
    designation2: "Backend Developer",
}