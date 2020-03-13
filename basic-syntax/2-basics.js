'use strict'

const SALUTATION = 'Ave';

const COLORS = [
    "black",
    "red",
    "green",
    "yellow",
    "blue",
    "magenta",
    "cyan",
    "white",
];

//Functions

const colorer = (s, color) => `\x1b[3${color}m${s}\x1b[0m`;
// \x1b - add 1 byte to string

const colorize = name => {
    let res = "";
    const letters = name.split('');
    // Get array of symbols
    let color = 1;
    for (const letter of letters) {
        res += colorer(letter, color++);
        if (color > COLORS.length) color = 1;
    }
    return res;
};

const greetings = name => (
    name.includes('Augustus') ?
    // if true
    `${SALUTATION},${colorize(name)}!` :
    //else
    `Hello, ${name}!`
);

//Usage

const fullName = 'Marcus Aurelius Antoninus Augustus';
console.log(greetings(fullName));

const shortName = 'Marcus Aurelius';
console.log(greetings(shortName));