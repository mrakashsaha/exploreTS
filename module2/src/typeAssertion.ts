// type assertion

// As a developer I understand type better than typescript then it is type assertion.

let anything: any;

anything = "Next Level Web Developer";

// anything = 566;


const x = (anything as string).charAt(5);

console.log(x);
 

const kgToGram = (value: string | number) : string | number | undefined => {
    if (typeof value==="string") {
        const convertedValue = parseFloat(value);
        return  `Converted Value is ${convertedValue*1000}`;
    }

    else if (typeof value === "number") {
        return value*1000;
    }
}



// If we use typer assertion typescript trust you blindly
const result1 : string = kgToGram("45") as string;
const result2 : number = kgToGram(45) as number;

console.log({result1, result2});


type CustomError = {
    message: string
}

try {

}

catch (error) {
    console.log((error as CustomError).message)
}