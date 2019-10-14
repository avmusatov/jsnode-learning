"use strcit"

const inc = n => {
    return n + 1;
};

console.log(inc(5));

const otherInc = num => {
    num['n'] += 1;
    return num['n'];
};

const num = {n: 5}

console.log(otherInc(num));