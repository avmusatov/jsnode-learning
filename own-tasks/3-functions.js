"use strict"

const average = (a, b) => {
    return (a + b) / 2;    
};

const square = x => {
    return x*x;
};

const cube = x => {
    return x*x*x;
}

const calculate = () =>{
    let result = []
    for (let i = 0; i < 10; i++){
        result.push(average(square(i),cube(i)));
    }
    return result;
}

console.log(calculate());