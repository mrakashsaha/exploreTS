"use strict";
// Problem 7:
// Description:
Object.defineProperty(exports, "__esModule", { value: true });
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
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
const getDayType = (day) => {
    return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
};
console.log(getDayType(Day.Sunday));
console.log(getDayType(Day.Monday));
//# sourceMappingURL=problem7.js.map