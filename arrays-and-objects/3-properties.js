"use strict"

const person = {
    name: 'Marcus',
    city: 'Roma',
    born: 121,
};

if ('name' in person){
    console.log('Person`s name is: ' + person.name);
}

for (const key in person){
    const value = person[key];
    console.dir({key, value});
}


// Variables to hash
const name = 'Marcus';
const city = 'Roma';

const person2 = {name, city};

// Dynamic field name

const fieldName = 'city';
const fieldValue = 'Roma';

const person3 = {
    name: 'Marcus',
    [fieldName]: fieldValue,
 }

 // Expression in field name

const person4 = {
    name: 'Marcus',
    ['city' + 'Born']: fieldValue,
 };

//Function in field name

function fn(s){
    return s + 'Born';
}

const person5 = {
    name: 'Marcus',
    [fn('city')]: fieldValue,
}
