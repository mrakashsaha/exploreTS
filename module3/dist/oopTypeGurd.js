"use strict";
// Instance of guard
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    species;
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log("I am making sound");
    }
}
class Dog extends Animal {
    constructor(name, species) {
        super(name, species);
    }
    makeBark() {
        console.log("Bark! Bark!");
    }
}
class Cat extends Animal {
    constructor(name, species) {
        super(name, species);
    }
    makeMew() {
        console.log("Mew! Mew!");
    }
}
const dog1 = new Dog("Tom", "Dog");
const cat1 = new Cat("Jerry", "Cat");
// Class can be use as type
const getAnimal = (animal) => {
    if (animal instanceof Dog) {
        animal.makeBark();
    }
    else if (animal instanceof Cat) {
        animal.makeMew();
    }
    else {
        animal.makeSound();
    }
};
getAnimal(dog1);
// Smart developer Works
const isDog = (animal) => {
    return animal instanceof Dog;
};
// a kind of boolean whic are telling this is true and cat
const isCat = (animal) => {
    return animal instanceof Cat;
};
const smartGetAnimal = (animal) => {
    if (isDog(animal)) {
        animal.makeBark();
    }
    else if (isCat(animal)) {
        animal.makeMew();
    }
    else {
        animal.makeSound();
    }
};
smartGetAnimal(cat1);
//# sourceMappingURL=oopTypeGurd.js.map