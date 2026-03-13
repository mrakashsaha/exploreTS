// conditional type

// If inside typescript a type is depended on another type then it is called condiditional type.

type a1 = number;
type b1 = undefined;

type x = a1 extends null ? true: false; // here x is conditioinal type.


type y = a1 extends null ? true : b1 extends undefined ? undefined : any;


type PrimeMinister = {
    bike: string;
    car: string;
    ship: string;
    tractor: string;
    airplane: string;
}


// car? bike? ship? tractor

type CheckVehicle <T> = T extends keyof PrimeMinister ? true : false

type HasTractor = CheckVehicle<"tractor">