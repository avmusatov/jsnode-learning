'use strict'

function factorial(n){
    if (n == 1) return 1;
    return n * factorial(n - 1);
}

function pow(x,n){
    if (n == 1) return x;
    return x * pow(x,n - 1);
}

function accumulator(mas){
    let len = mas.length;
    let elem = mas.pop();

    if (len == 0) return NaN;
    else if (len == 1) return elem;
    else return elem + accumulator(mas);
}

//Difficulty: the worst case: O(n^2), average O(n*log(n))
function quickSort(mas){
    let len = mas.length;

    if (len < 2) return mas;
    else{
        let pilor = mas.shift();
        let less = [], more = [];
        mas.forEach(function(item,i,mas){
            if (item <= pilor) less.push(item);
            else more.push(item);
        });
        return quickSort(less).concat([pilor],quickSort(more));
    }
}

console.log('factorial(5) = ' + factorial(5));
console.log('pow(5,2) = ' + pow(5,2) );
console.log('accumulator([1,2,3,4,5]) = ' + accumulator([1,2,3,4,5]));
console.log('quickSort([0,-3,23,4,5,1]) = ' + quickSort([0,-3,23,4,5,1]));
