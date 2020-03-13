'use strict'

const user = {};
user.name = "John";
user.surname = "Smith";

user.name = "Pete";
delete user.name;

console.dir(user);

let isEmpty = object => {
    for (let key in object) {
        if (key !== undefined) return false;
    }
    return true;
}

console.log("isEmpty:", isEmpty(user));

delete user.surname;

console.log("isEmpty:", isEmpty(user));

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const sum = object => {
    let s = 0;
    for (let key in object) {
        s += object[key];
    }
    return s;
};

console.log('sum:' + sum(salaries));

const menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

const multiplyNumeric = object => {
    for (let key in object) {
        if (typeof(object[key]) === "number") {
            object[key] *= 2;
        }
    }
}

multiplyNumeric(menu);

console.dir(menu);