"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    species;
    sound;
    // public name: string;
    // public species: string;
    // public sound: string;
    // constructor (name: string, species: string, sound: string) {// repeation of same code
    //     this.name =name;
    //     this.species =species;
    //     this.sound = sound;
    // }
    // by using paramerter proparety automatically done by typescript
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`The ${this.name} is says ${this.sound}`);
    }
}
const dog = new Animal("German Shepared", "Dog", "Gheu Gheu");
const cat = new Animal("Persian Bhai", "Cat", "Mew Mew");
cat.makeSound();
dog.makeSound();
//# sourceMappingURL=class-object.js.map