'use strict'

//
let random = (min, max) => {
    return Math.random() * (max - min) + min;
}

console.log("random(1, 5):", random(1, 5));
console.log("random(0, 10):", random(0, 10));
console.log("random(-5, 5):", random(-5, 5));

//
let randomInteger = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}

console.log("randomInteger(1,5):", randomInteger(1, 5));
console.log("randomInteger(0, 10):", randomInteger(0, 10));
console.log("randomInteger(-5, 5):", randomInteger(-5, 5));