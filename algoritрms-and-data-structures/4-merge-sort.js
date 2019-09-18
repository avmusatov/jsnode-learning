// Difficulty: O(n*log(n))
'use strict'

function merge(arrLeft, arrRight){
    let arrSorted = [];
    let i = 0, j = 0;

    while (i < arrLeft.length && j < arrRight.length){
        arrSorted.push(
            (arrLeft[i] < arrRight[j]) ?
            arrLeft[i++] : arrRight[j++]
        );
    }

    return[
        ...arrSorted,
        ...arrLeft.slice(i),
        ...arrRight.slice(j),
    ];
}

function mergeSort(arr){
    if (!arr || !arr.length) return null;
    if (arr.length <= 1) return arr;
    else {
    const middle = Math.floor(arr.length / 2);
    const arrLeft = arr.slice(0, middle);
    const arrRight = arr.slice(middle);
    return merge(mergeSort(arrLeft), mergeSort(arrRight));
    }
};

console.log(mergeSort([0,-3,23,4,5,1]));
