'use strict'

const i = 5;
const f = 10.3; //Numbers
const s = 'Hello'; //String
const b = true; //Boolean

//Object
const person = {
    name: 'Marcus Aurelis' ,
    born: 121,
    city: 'Roma',
    position: 'emperor',
}

person.city = 'Odessa';

const cities = ['Athens', 'Roma', 'London', 'Beijing', 'Kiev', 'Riga'];

//Push is add to the end, unshift is to the beginning
cities.push('Odessa');
cities.unshift('New York');

//Shift is get from the beginning, Pop is from the end
console.log('shift' + cities.shift());
console.log('pop' + cities.pop());

console.log({ i }, typeof i);
console.log({ s }, typeof s);
console.log({ b }, typeof b);
console.log({ f }, typeof f);

console.log({ person }, typeof person);
console.log({ isArray: Array.isArray(person) });

console.log({ cities }, typeof cities);
console.log({ isArray: Array.isArray(cities) });

console.log({ instanceofArray: cities instanceof Array });
