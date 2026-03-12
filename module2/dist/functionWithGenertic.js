"use strict";
// function wtih generic 
Object.defineProperty(exports, "__esModule", { value: true });
const createArray = (params) => {
    return [params];
};
const createArrayWithGenertic = (params) => {
    return [params];
};
const result1 = createArray('Bangladesh');
const result2 = createArrayWithGenertic(true);
const result3 = createArrayWithGenertic({ name: "Akash", age: 15 });
console.log(result1);
const createArrayWithTuple = (params1, params2) => {
    return [params1, params2];
};
const result4 = createArrayWithTuple("akash", 56);
const result5 = createArrayWithTuple("akash", { father: "goutam", mother: "sorosoty" });
const addCourseToStudent = (student) => {
    const course = "Next Level Web Development";
    return Object.assign(Object.assign({}, student), { course });
};
const student1 = addCourseToStudent({ name: "Mr Akash", email: "mr.akashsaha@gmail.com", devType: "Next Level Web Developer" });
const student2 = addCourseToStudent({ name: "Mr Tanvir", email: "mr.tanvir@gmail.com", devType: "Next Level Web Developer", DOB: 1998 });
console.log(student1);
console.log(student2);
//# sourceMappingURL=functionWithGenertic.js.map