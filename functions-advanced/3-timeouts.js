"use strict"

//
function printNumbers(from, to) {
    let id = setInterval(() => {
        console.log(from++);
        if (from > to) clearInterval(id);
    }, 1000);
}

function printNumbersRec(from, to) {
    let id = setTimeout(function printNumber() {
        console.log(from++);
        if (from <= to) setTimeout(printNumber, 1000);
    }, 1000);
}

printNumbersRec(0, 2);
