"use strict"

// 
let calculator = {
    read(arg1, arg2) {
        this.arg1 = arg1;
        this.arg2 = arg2;
    },

    sum() {
        return this.arg1 + this.arg2;
    },

    mul() {
        return this.arg1 * this.arg2;
    }
};

calculator.read(-1, 2);
console.log("calculator.sum():", calculator.sum());
console.log("calculator.mul():", calculator.mul());

//

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // показывает текущую ступеньку
        return this.step
    }
};

console.log("ladder.up().up().down().down().showStep():", ladder.up().up().down().down().showStep())

let partial = (fn, x) => (...args) => fn(x, ...args);

let sum3 = (a, b, c) => a + b + c;

let f11 = partial(sum3, 1);
let f12 = partial(f11, 2);
let y = f12(3);
console.log("partial:", y(3));