'use strict'

// Underfined
let emptyScalar;
console.log({ emptyScalar }, typeof emptyScalar);

// Null
const emptyObject = null;
console.log({ emptyObject }, typeof emptyObject);

// NaN is Not a number. Shows error of calculation.
let count = NaN;
console.log({ count }, typeof count);

count = undefined + 1;
console.dir({ count });

console.log(Infinity, -Infinity, typeof Infinity);

const s = (
    emptyObject === null ?
        'emptyObject is null':
        'emptyObject is not null'
);
console.log(s);
