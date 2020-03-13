'use strict'

//
function Calculator() {
    this.read = (arg1, arg2) => {
        this.arg1 = arg1;
        this.arg2 = arg2;
    }

    this.sum = () => {
        return this.arg1 + this.arg2;
    }

    this.mul = () => {
        return this.arg1 * this.arg2;
    }
}

let calculator = new Calculator();
calculator.read(5, 5);

console.log("calculator.mul():" + calculator.mul());
console.log("calculator.sum():" + calculator.sum());

//
function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = (newArg) => {
        this.value += newArg;
    }
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(2);
accumulator.read(3);

console.log("accumulator.value:", accumulator.value);