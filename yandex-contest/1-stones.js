'use strict'

const stones = 'aaadsgfchgab';
const jewels = 'abccccccsb';

let counter = 0;
for (let i = 0; i < stones.length; i++)
    if (jewels.includes(stones.charAt(i)))
        ++counter;

console.log(counter);
