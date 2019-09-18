//Difficulty: O(n^2)

'use strict'

let mas = [103,220,40,150,650,-100,0];

function findMin(mas){
    let min = mas[0], iMin = 0;
    const len = mas.length;

    for (let i = 0; i < len; i++){
        if (mas[i] < min){
            min = mas[i];
            iMin = i;
        }
    }
    return iMin;
}

function selectionSort(mas){
    const len = mas.length;
    let res = [];
    let iMin;

    for (let i = 0; i < len; i++){
        iMin = findMin(mas);
        res.push(mas[iMin]);
        mas.splice(iMin,1);
    }
    return res;
}

console.log(selectionSort(mas));
