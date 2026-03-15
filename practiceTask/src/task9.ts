// Task 9: Optional Chaining
// Objective: Use optional chaining with nested objects.

// Instructions:

// Write a function getEmployeeCity(employee) that safely retrieves the city of an employee from a nested object using optional chaining.



type Employee = {
    name: string;
    address: {
        house: string;
        road: string;
        city?: string;
    }
    email: string;
}

const getEmployeeCity = (employee: Employee) => {
    return employee?.address?.city;
}


console.log(getEmployeeCity({ name: "Akash", address: { house: "AA", city: "dhaka", road: "32A" }, email: "mr.akashsaha@gmail.com" }));