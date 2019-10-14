"use strict"

const range = (start, end) => {
    let numbers = [start];
    for (let i = start + 1; i <= end; i++ ){
        numbers.push(i);
    }
    return numbers;
};


const rangeOdd = (start, end) => {
    let numbersOdd = [];
    for (let i = start; i <= end; i++){
        if (i % 2 !== 0) numbersOdd.push(i);
    }
    return numbersOdd
};

console.log(range(15,30));
console.log(rangeOdd(15,30));