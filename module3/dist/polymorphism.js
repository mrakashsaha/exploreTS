"use strict";
// Learn about polymorphism
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    getSleep() {
        console.log("I am sleeping for 8 hours per day");
    }
}
class Student extends Person {
    getSleep() {
        console.log("I am sleeping for 7 hours per day");
    }
}
class Developer extends Person {
    getSleep() {
        console.log("I am sleeping for 6 hours per day");
    }
}
const getSleepingHour = (param) => {
    param.getSleep();
};
const p1 = new Person();
const p2 = new Student();
const p3 = new Developer();
getSleepingHour(p1);
getSleepingHour(p2);
getSleepingHour(p3);
class Shape {
    getArea() {
        return 0;
    }
}
class Circle extends Shape {
    radius;
    constructor(r) {
        super();
        this.radius = r;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectriangle extends Shape {
    height;
    width;
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
}
const getShapeArea = (param) => {
    console.log(param.getArea());
};
const s1 = new Shape();
const s2 = new Circle(5);
const s3 = new Rectriangle(5, 5);
getShapeArea(s1);
getShapeArea(s2);
getShapeArea(s3);
//# sourceMappingURL=polymorphism.js.map