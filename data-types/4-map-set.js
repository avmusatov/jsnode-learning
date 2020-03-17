'use strict'

//
let unique = array => Array.from(new Set(array));

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log("unique(values):", unique(values));

//
let aclean = words => {
    let letters = [];
    let map = new Map();

    words.forEach(word => {
        letters = Array.from(word.toLowerCase()).sort().join("");
        map.set(letters, word);
    });

    return Array.from(map.values());
};

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log("aclean(arr):", aclean(arr));