// There are two option for abstruction. 
// 1. Interface
// 2. Abstract Class



// got the idea here
interface Vehical1 {
    startEngine(): void;
    stopEngine(): void;
    acclerate(): void;

}



// real implementation will be here
class Car implements Vehical1 {
    startEngine(): void {
        console.log("This engine is started")
    }

    acclerate(): void {
        console.log("I am increasing speed of the engine");
    }

    stopEngine(): void {
        console.log("The engine is stopped sucessfully")
    }


    // Extra method can be implemented here
    pushBreak(): void {
        console.log("The break is pushing")
    }
}

const tyotaCar = new Car();

tyotaCar.acclerate();


// 2. Abstract Class


abstract class Car2 {
    abstract startEngine(): void;
    abstract acclerate(): void;
    abstract stopEngine(): void;


    // Extra method can be implemented here
    pushBreak(): void {
        console.log("The break is pushing")
    }
}

class HondaCar extends Car2 {
    startEngine(): void {
        console.log("Honda Car Started")
    }
    acclerate(): void {
        console.log("Speed Increasing")
    }
    stopEngine(): void {
        console.log("Stoping the HondaCar")
    }
}

const hondaCar = new HondaCar();

hondaCar.startEngine();
hondaCar.pushBreak();