// function wtih generic 

const createArray = (params: string): string[] => {
    return [params];
}


const createArrayWithGenertic = <T>(params: T): T[] => {
    return [params];
}

const result1 = createArray('Bangladesh');
const result2 = createArrayWithGenertic<boolean>(true);


type User = {
    name: string; 
    age: number;
}
const result3 = createArrayWithGenertic<User>({ name: "Akash", age: 15 });

console.log(result1);



const createArrayWithTuple = <T, U> (params1: T, params2: U) : [T, U] => {
    return [params1, params2];
}

const result4 = createArrayWithTuple<string, number>("akash", 56);
const result5 = createArrayWithTuple<string, {father: string; mother: string}>("akash", {father: "goutam", mother: "sorosoty"});


const addCourseToStudent = <T> (student : T)  => {
    const course = "Next Level Web Development";

    return {
        ...student, course,
    }
}


const student1 = addCourseToStudent ({name: "Mr Akash", email: "mr.akashsaha@gmail.com", devType: "Next Level Web Developer"})
const student2 = addCourseToStudent ({name: "Mr Tanvir", email: "mr.tanvir@gmail.com", devType: "Next Level Web Developer", DOB: 1998})

console.log (student1)
console.log (student2)