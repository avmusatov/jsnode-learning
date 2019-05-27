'use strict'

// 2nd argue is number system
console.log(parseInt('11', 2));
console.log(parseInt('11', 8));
console.log(parseInt('11', 16));

console.log(parseInt(5, 10));
console.log(parseInt('5', 10));
console.log(parseInt('+5', 10));
console.log(parseInt('5mm', 10));

//NaN in all cases
console.log(parseInt('(5)', 10));
console.log(parseInt('"5"', 10));
console.log(parseInt('[5]', 10));

console.log(parseInt('NaN', 10));
console.log(parseInt(Infinity, 10));
console.log(parseInt('Infinity', 10));
console.log(parseInt('-Infinity', 10));

//
console.log(5.1, parseInt(5.1, 10));
console.log(5.1 * 1e50, parseInt(5.1 * 1e50, 10));
console.log(5, parseInt(0.0000005, 10)); // 5
console.log(5, parseInt(0.000005, 10)); // 0

//255
console.log('ff', parseInt('ff', 16)); // 0

//3.14
console.log(parseFloat(3.14));
console.log(parseFloat('3.14'));
console.log(parseFloat('314e-2'));
console.log(parseFloat('3.14text'));

//5
console.log(parseFloat('5.0'));
console.log(parseFloat('5.00000001'));

//5.1
console.log(parseFloat('5.1'));
