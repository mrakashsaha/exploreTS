class Individual {
    public name: string;
    public age: number;
    public email: string;

    constructor (name: string, age: number, email: string) {
        this.name = name,
        this.age = age;
        this.email = email;
    }


    printInfo () {
        console.log (`This is Mr. ${this.name} and he / she is ${this.age} years old`)
    }
}



class Student extends Individual {

}



class Teacher extends Individual {
    designation: string;

    constructor (name: string, age: number, email: string, designation: string) {
        super(name, age, email)
        this.designation = designation;
    }

    takeClass (hour: number) {
        console.log(`${this.designation} Mr ${this.name} take classes for ${hour}`);
    }
}


const student1 = new Student("Akash", 45, "mr.akashsaha@gmail.com")

student1.printInfo();


const teacher1 = new Teacher("Akash", 45, "mr.akashsaha@gmail.com", "Assistant Professor")

student1.printInfo();
teacher1.printInfo();
teacher1.takeClass(5);