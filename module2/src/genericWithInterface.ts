type GeneraticTuple<X, Y> = [X, Y]

type UserInfo = {
    name: string;
    email: string;
}

interface UserInfo2 {
    name: string;
    email: string;
}


const UserWithID: GeneraticTuple<number, UserInfo2> = [1234, { name: "Akash", email: "akash@gmail.com" }]


// We will learn about generic generic interface.

interface Developer<T, U = null> {
    name: string;
    computer: {
        brand: string;
        model: string;
        releaseYear: number;
    }

    smartWatch: T;
    bike?: U;
}


// const poorDeveloper : Developer <{brand: string, model: string}> = {
//   name: "Akash Kumar Saha",
//   computer: {
//     brand: "Lenovo",
//     model: "G-5080", 
//     releaseYear: 2015,
//   },
//   smartWatch: {
//     brand: "ColMi",
//     model: "P21 Plus"
//   }
// }

type NormalWatch = {
    brand: string;
    model: string;
}

const poorDeveloper: Developer<NormalWatch> = {
    name: "Akash Kumar Saha",
    computer: {
        brand: "Lenovo",
        model: "G-5080",
        releaseYear: 2015,
    },
    smartWatch: {
        brand: "ColMi",
        model: "P21 Plus"
    }
}



// const reachDeveloper: Developer<> = {
//     name: "Akash Kumar Saha",
//     computer: {
//         brand: "Macbook",
//         model: "M3",
//         releaseYear: 2024,
//     },
//     smartWatch: {
//         brand: "Apple",
//         model: "Watch Pro",
//         heartTrack: true,
//         sleepTrack: true,
//     }
// }

interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
}

interface YahamaBike {
    brand: string;
    model: string;
    engine: number;
}

const reachDeveloper: Developer<AppleWatch, YahamaBike> = {
    name: "Akash Kumar Saha",
    computer: {
        brand: "Macbook",
        model: "M3",
        releaseYear: 2024,
    },
    smartWatch: {
        brand: "Apple",
        model: "Watch Pro",
        heartTrack: true,
        sleepTrack: true,
    },
    bike: {
        brand: "Yahama",
        model: "FZ",
        engine: 150,
    }
}


