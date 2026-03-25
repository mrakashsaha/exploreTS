// Problem 7:
// Description:

// Define an enum Day for the days of the week.
// Create a function that returns "Weekday" or "Weekend" based on the input day.
// Enum & Function Signature:

// enum Day {
//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
//   Sunday
// }

// function getDayType(day: Day): string
// Example:

// getDayType(Day.Monday);   // Output: "Weekday"
// getDayType(Day.Sunday);   // Output: "Weekend"

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

const getDayType = (day: Day) : string => {

    return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday"
}

console.log(getDayType(Day.Sunday));
console.log(getDayType(Day.Monday));