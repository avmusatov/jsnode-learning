'use strict'

//
let sumSalaries = salaries => Object.values(salaries).reduce((sum, salary) => sum + salary, 0);
// let sumSalaries = salaries => {
//     let sum = 0;
//     for (let salary of Object.values(salaries)) {
//         sum += salary;
//     }
//     return sum;
// };

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log("sumSalaries(salaries):", sumSalaries(salaries));

//
let countProperties = object => Object.keys(object).length;

console.log("countProperties(salaries)", countProperties(salaries));