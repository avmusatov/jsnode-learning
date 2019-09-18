'use strict'

function dictFromString(s){
    let dict = [];
    let c;

    for (let i = 0; i< s.length; i++) dict.push({ i:0 })
    for (let i = 0; i< s.length; i++) dict[i] = {s[i]:0};
    return dict;
}

console.dir(dictFromString('abcbdbsadsf'));
