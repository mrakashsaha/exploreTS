// Learn about polymorphism


class Person {

    getSleep () {
        console.log("I am sleeping for 8 hours per day")
    }

}


class Student extends Person {
    getSleep () {
        console.log("I am sleeping for 7 hours per day")
    }
}

class Developer extends Person {
    getSleep () {
        console.log("I am sleeping for 6 hours per day")
    }
}


const getSleepingHour = (param: Person) => {
    param.getSleep();
}


const p1 = new Person();
const p2 = new Student();
const p3 = new Developer();


getSleepingHour(p1);
getSleepingHour(p2);
getSleepingHour(p3);



class Shape {
    getArea () : number {
        return 0;
    }
}


class Circle extends Shape {

    radius: number;

    constructor(r: number) {
        super();
        this.radius = r;
    }

    getArea(): number {
        return Math.PI*this.radius*this.radius;
    }
}


class Rectriangle extends Shape {
    height: number;
    width: number;

    constructor (height: number, width: number) {
        super();
        this.height = height;
        this.width = width;

      
    }

    getArea(): number {
        return this.height * this.width;
    }
}


const getShapeArea = (param: Shape) => {
    console.log(param.getArea())
}


const s1 = new Shape();
const s2 = new Circle(5);
const s3 = new Rectriangle(5, 5);


getShapeArea(s1);
getShapeArea(s2);
getShapeArea(s3);