// Constrains => Enforcing with Extends keywords



const addCourseToStudent = <T extends {id: number, name: string}>(student: T) => {
    const course = "Next Level Web Development";

    return {
        ...student, course,
    }
}


const student1 = addCourseToStudent<{id: number;name: string;email: string;devType: string;}>({ id: 1564, name: "Mr Akash", email: "mr.akashsaha@gmail.com", devType: "Next Level Web Developer" })
const student2 = addCourseToStudent({ id: 4654, name: "Mr Tanvir", email: "mr.tanvir@gmail.com", devType: "Next Level Web Developer", DOB: 1998 });

const student3 = addCourseToStudent({id: 456, name: "Akash" })

console.log(student1)
console.log(student2)