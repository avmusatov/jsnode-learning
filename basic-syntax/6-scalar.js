'use strict'

// Scalar 2 gives a value
let scalar1 = 5;
let scalar2 = scalar1;
scalar1--;
scalar2++;
console.dir({scalar1, scalar2});

// obj2 => obj1 Object 2 gives a reference
const obj1 = {field: 5};
const obj2 = obj1;
obj1.field = 6;
console.dir({obj1, obj2});

//Functions, arrays, objects are reference types!
