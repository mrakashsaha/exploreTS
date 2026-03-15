class  Animal  {
    // public name: string;
    // public species: string;
    // public sound: string;


    // constructor (name: string, species: string, sound: string) {// repeation of same code
    //     this.name =name;
    //     this.species =species;
    //     this.sound = sound;
    // }

     

    // by using paramerter proparety automatically done by typescript

    constructor(public name: string, public species: string, public sound: string) {
        
    }



    makeSound() {
        console.log(`The ${this.name} is says ${this.sound}`);
    }
}

const dog = new Animal("German Shepared", "Dog", "Gheu Gheu");

const cat = new Animal ("Persian Bhai", "Cat", "Mew Mew");


cat.makeSound();
dog.makeSound();