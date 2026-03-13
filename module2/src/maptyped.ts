const arrayOfNumber : number [] = [1, 2, 2, 444, 3, 2, 21];

const arrayOfString : string [] = ["1", "2", "2", "444", "3", "2", "21"]

const arrayOfString2 : string [] = arrayOfNumber.map(num=> num.toString());

console.log(arrayOfString2);


type AreaNumber = {
    height: number;
    width: number;
    depth: number;
}

type AreaString = {
    height: string;
    width: string;
}

// Map Type
type AreaString2 = {
    [key in keyof(AreaNumber)] : string;
}


type Height = AreaNumber["height"]  // Lookup type


//Map Type with Generic
type AreaString3 <T> = {
    [key in keyof T] : T[key];
}


const area1 : AreaString3<{height: string; width: number}> = {
    height: "100",
    width: 45,
}