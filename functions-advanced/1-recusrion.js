"use strict"

//
let sumToRec = (n) => {
    if (n === 1) {
        return 1;
    }
    else {
        return n + sumToRec(n - 1);
    }
};

let sumToProgression = (n) => {
    return (1 + n) / 2 * n;
};

console.log("sumToRec(100):", sumToRec(100));
console.log("sumToProgression(100):", sumToProgression(100));

//
let factorial = (n) => (n === 1) ? 1 : n * factorial(n - 1);

console.log("factorial(5):", factorial(5));

//
let fib = (n) => (n === 1 || n === 2) ? 1 : fib(n - 1) + fib(n - 2);

let fibIter = (n) => {
    if (n === 1 || n === 2) return 1;

    let arr = [1, 1]
    for (let i = 3; i <= n; i++) {
        arr.push(arr[i - 2] + arr[i - 3]);
    }

    return arr[n-1];
}

let fibBest = (n) => {
    let a = 1, b = 1;

    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }

    return b;
}

console.log("fib(77):", fib(7));
console.log("fibIter(77):", fibIter(77));
console.log("fibBest(77):", fibBest(77));

//
let printListReverse = (node) => {
    if (node.next) {
        printListReverse(node.next);
        console.log(node.value);
    } else {
        console.log(node.value);
    }
}

let printList = (node) => {
    if (node.next) {
        console.log(node.value);
        printList(node.next);
    } else {
        console.log(node.value);
    }
}

let printListIter = (node) => {
    let t = node;

    while (t) {
        console.log(t.value);
        t = t.next;
    }
}


let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  printListIter(list);
  printListReverse(list);