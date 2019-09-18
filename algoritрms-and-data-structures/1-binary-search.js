// Difficulty: O(log(n))

'use strict'
const mas = [10,20,30,40,50,60,70,80,90,100,1000,200000];
const item = 11;

function binarySearch(mas, item){
    let low = 0;
    let high = mas.length - 1;
    let current, mid;

    while (low <= high){
        mid = Math.floor((low + high) / 2);
        current = mas[mid];
        if (current > item) high = mid - 1;
        else if (current < item) low = mid + 1;
        else return mid;
    }

    return NaN;
}

console.log(binarySearch(mas,item));
