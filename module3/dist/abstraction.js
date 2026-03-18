"use strict";
// There are two option for abstruction. 
// 1. Interface
// 2. Abstract Class
Object.defineProperty(exports, "__esModule", { value: true });
// real implementation will be here
class Car {
    startEngine() {
        console.log("This engine is started");
    }
    acclerate() {
        console.log("I am increasing speed of the engine");
    }
    stopEngine() {
        console.log("The engine is stopped sucessfully");
    }
    // Extra method can be implemented here
    pushBreak() {
        console.log("The break is pushing");
    }
}
const tyotaCar = new Car();
tyotaCar.acclerate();
// 2. Abstract Class
class Car2 {
    // Extra method can be implemented here
    pushBreak() {
        console.log("The break is pushing");
    }
}
class HondaCar extends Car2 {
    startEngine() {
        console.log("Honda Car Started");
    }
    acclerate() {
        console.log("Speed Increasing");
    }
    stopEngine() {
        console.log("Stoping the HondaCar");
    }
}
const hondaCar = new HondaCar();
hondaCar.startEngine();
hondaCar.pushBreak();
//# sourceMappingURL=abstraction.js.map