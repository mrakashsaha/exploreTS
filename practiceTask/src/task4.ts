// Task 4: Union and Intersection Types
// Objective: Create union and intersection types using interfaces.

// Instructions:

// Define interfaces Book and Magazine.
// Create:
// A type that is a union of Book and Magazine.
// A type that is an intersection of Book and Magazine.


interface Book {
    bookTitle: string;
    author: string;
    releaseYear: number;
}

interface Magazine {
    magazineTitle: string;
    author: string;
    printMedia: string;
}


type BookORMagazine = Book | Magazine;
type BookAndMagazine = Book & Magazine;

const newPaper: BookORMagazine = {
    bookTitle: "TypeScriptGuid",
    author: "Akash",
    releaseYear: 2056,

}

const newPaper2: BookAndMagazine = {
    bookTitle: "Learning TS",
    magazineTitle: "Tech Weekly",
    author: "Akash",
    releaseYear: 2024,
    printMedia: "Print"

}