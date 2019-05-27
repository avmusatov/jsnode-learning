'use strict'

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday',
 'Friday', 'Saturday', 'Sunday'];

const getDayWithoutSwitch = n => (
    n > 0 && n <= days.length ?
    days[n - 1] :
    new Error(`Invalid input, ${n} `)
);

console.log(getDayWithoutSwitch(7));

const getDay = n => {
    switch (n) {
        case 1: return 'Monday';
        case 1: return 'Tuesday';
        case 1: return 'Wednesday';
        case 1: return 'Thursday';
        case 1: return 'Friday';
        case 1: return 'Saturday';
        case 1: return 'Sunday';
        default: return new Error(`Invalid input, ${n} `);
    }
};

console.log(getDay(1));

const getDayNumber = name => {
    const n = days.indexOf(name) + 1;
    return n!== -1 ? n : new new Error(`Invalid name of day, ${name} `);
};

console.log(getDayNumber('Monday'));
