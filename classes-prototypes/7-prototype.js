"use strict"

function Logger(kind) {
    this.color = Logger.colors[kind] || Logger.colors.info;
}

Logger.colors = {
    warning: '\x1b[1;33m',
    error: '\x1b[0;31m',
    info: '\x1b[1;37m',
};

Logger.prototype.log = function (s) {
    const date = new Date().toISOString();
    console.log(this.color + date + '\t' + s);
}

const warning = new Logger('warning');
const error = new Logger('error');
const debug = new Logger('debug');
const slow = new Logger('slow');

slow.log('I am slow logger');
warning.log('Hello');
error.log('World');
debug.log('Bye!');

//
Function.prototype.defer = function (ms) {

    let f = this;

    return function (...args) {
        setTimeout(() => f.apply(f, args), ms);
    }
}

function f(a, b) {
    console.log(a + b);
}

//f.defer(1000)(1, 2); // выведет "Hello!" через 1 секунду

//
let dictionary = Object.create(null);

Object.defineProperty(dictionary, "toString", {
    value() {
        return Object.keys(this).join(",");
    }
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for (let key in dictionary) {
    console.log(key);
}

console.log(dictionary.toString());