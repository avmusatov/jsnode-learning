'use strict'

const a = 9;
const b = 14;
const c = -9;

const aBinary = a.toString(2);

console.log(a + ' to base 2: ', aBinary);

console.log('Bitwise operators');

console.log (a + ' & ' + b + '= ' + (a & b));
console.log (a + ' | ' + b + '= ' + (a | b));
console.log (a + ' ^ ' + b + '= ' + (a ^ b)); // a xor b
console.log ('~ ' + b + '= ' + (~ b)); // Bitwise "Not"
