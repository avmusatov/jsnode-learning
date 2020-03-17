'use strict'

//
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-roll");
styles[Math.floor(styles.length / 2)] = "Classic";
styles.shift();
console.log("styles:", styles);
styles.unshift("Rap", "Raggie");

//
let arr = ["a", "b"];

arr.push(function() {
    console.log(this);
})

arr[2]();

//
let getMaxSubSum = array => {
    let currentSum = 0,
        maxSum = 0;

    for (let element of array) {
        currentSum += element;

        maxSum = Math.max(maxSum, currentSum);

        if (currentSum < 0) currentSum = 0;
    }

    return maxSum;
};

console.log("getMaxSubArray([1, -2, 3, 4, -9, 6]):", getMaxSubSum([1, -2, 3, 4, -9, 6]));
console.log("getMaxSubArray([2, -1, 2, 3, -9]):", getMaxSubSum([2, -1, 2, 3, -9]));
console.log("getMaxSubArray([-1, 2, 3, -9, 11]):", getMaxSubSum([-1, 2, 3, -9, 11]));
console.log("getMaxSubArray([100, -9, 2, -3, 5]):", getMaxSubSum([100, -9, 2, -3, 5]));
console.log("getMaxSubArray([1, 2, 3]):", getMaxSubSum([1, 2, 3]));

//
let camelize = str => {
    let tokens = str.split("-");
    tokens = tokens.map((token, i) => {
        if (i == 0) return token;
        return token[0].toUpperCase() + token.slice(1, str.length);
    });
    return tokens.join('');
};

console.log('camelize("background-color"):', camelize("background-color"));
console.log('camelize("-webkit-transition"):', camelize("-webkit-transition"));

//
let filterRange = (array, a, b) => array.filter(item => item >= a && item <= b);

console.log('filterRange([5, 3, 8, 1]):', filterRange([5, 3, 8, 1], 1, 4));

//
let filterRangeInPlace = (array, a, b) => {
    array.forEach((item, index) => {
        if (item < a || item > b) {
            array.splice(index, 1);
        }
    });
};

let numerics = [5, 3, 8, 1];

filterRangeInPlace(numerics, 1, 4);
console.log("numerics after filterRangeInPlace(numerics, 1, 4):", numerics);

//
function Calculator() {
    this.operations = {
        '+': (arg1, arg2) => arg1 + arg2,
        '-': (arg1, arg2) => arg1 - arg2,
    }

    this.calculate = expression => {
        let [arg1, operation, arg2] = expression.split(' ');

        arg1 = parseInt(arg1);
        arg2 = parseInt(arg2);

        if (!this.operations[operation] || isNaN(arg1) || isNaN(arg2)) {
            return NaN;
        }

        return this.operations[operation](arg1, arg2);
    }

    this.addMethod = (name, func) => {
        this.operations[name] = func;
    }
}


let calculator = new Calculator();

calculator.addMethod('*', (a, b) => a * b);
calculator.addMethod('/', (a, b) => a / b);
calculator.addMethod('**', (a, b) => a ** b);

console.log('calculator.calculate("1 - 2"):', calculator.calculate("1 - 2"));
console.log('calculator.calculate("2 ** 3"):', calculator.calculate("2 ** 3"));
console.log('calculator.calculate("5 / 10"):', calculator.calculate("5 / 10"));

//
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let userMapped = users.map(user => {
    return {
        id: user.id,
        fullName: user.name + " " + user.surname,
    };
})

console.log("userMapped:", userMapped);

//
let sortByAge = users => {
    users.sort((user1, user2) => user1.age - user2.age)
};

vasya = { name: "Вася", surname: "Пупкин", id: 1, age: 25 };
petya = { name: "Петя", surname: "Иванов", id: 2, age: 30 };
masha = { name: "Маша", surname: "Петрова", id: 3, age: 28 };

users = [vasya, petya, masha];

sortByAge(users);

console.log("users after sortByAge(users):", users);

//
let unique = array => {
    let uniqueValues = [];
    for (let value of array) {
        if (!uniqueValues.includes(value)) {
            uniqueValues.push(value);
        }
    }
    return uniqueValues;
};

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log("unique(strings):", unique(strings));