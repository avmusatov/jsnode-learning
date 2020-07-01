"use strict"

//
function sum(a) {
    return function (b) {
        return a + b;
    }
}

console.log("sum(5)(-1):", sum(5)(-1));

//
function inBetween(a, b) {
    return function (item) {
        return item >= a && item <= b;
    }
}

function inArray(arr) {
    return function (item) {
        return arr.includes(item);
    }
}

let array = [1, 2, 3, 4, 5, 6, 7];

console.log(array.filter(inBetween(3, 6))); // 3,4,5,6
console.log(array.filter(inArray([1, 2, 10]))); // 1,2

//
function byField(field) {
    return function (a, b) {
        return (a[field] > b[field]) ? 1 : -1;
    }
}

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

users.sort(byField('name'));
console.log(users);
users.sort(byField('age'));
console.log(users);

//
function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
        
      let shooter = function() {
        console.log( i );
      };
      shooters.push(shooter);
      i++;
    }
    
    return shooters;
  }
  
  let army = makeArmy();
  
  army[0](); // у 0-го стрелка будет номер 10
  army[5](); // и у 5-го стрелка тоже будет номер 10
  // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...