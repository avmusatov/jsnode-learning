"use strict"

const diffTypes = [true, 'hello', 5, 12, -200, false, false, 'word',false,
'name',-11.5, 'like', {n: 5}, 1n];

const diffTypesObj = {};

const len = diffTypes.length;

for (let i = 0; i < len; i++) {
    diffTypesObj[`${typeof diffTypes[i]}`] = 0; 
}

console.log(diffTypesObj);

for (let elem of diffTypes) {
    diffTypesObj[`${typeof elem}`] += 1;
}

for (let elem of diffTypes){
    delete diffTypesObj[`${typeof elem}`];
}

console.log(diffTypesObj);