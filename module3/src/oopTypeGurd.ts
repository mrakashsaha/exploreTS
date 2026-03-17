// Instance of guard

class Animal {
    name: string;
    species: string;


    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

    makeSound() {
        console.log("I am making sound");
    }

}


class Dog extends Animal {
    constructor(name: string, species: string) {
        super(name, species)
    }

    makeBark() {
        console.log("Bark! Bark!")
    }
}

class Cat extends Animal {
    constructor(name: string, species: string) {
        super(name, species)
    }

    makeMew() {
        console.log("Mew! Mew!")
    }
}


const dog1 = new Dog("Tom", "Dog");
const cat1 = new Cat("Jerry", "Cat");


// Class can be use as type
const getAnimal = (animal: Animal) => {

    if (animal instanceof Dog) {
        animal.makeBark();
    }

    else if (animal instanceof Cat) {
        animal.makeMew();
    }

    else {
        animal.makeSound();
    }
}


getAnimal(dog1);

// Smart developer Works

const isDog = (animal: Animal): animal is Dog => {

    return animal instanceof Dog;

}

                                 // a kind of boolean whic are telling this is true and cat
const isCat = (animal: Animal) : animal is Cat => {

    return animal instanceof Cat;

}


const smartGetAnimal = (animal: Animal) => {

    if (isDog(animal)) {
        animal.makeBark();
    }

    else if (isCat(animal)) {
        animal.makeMew();
    }

    else {
        animal.makeSound();
    }
}

smartGetAnimal(cat1);