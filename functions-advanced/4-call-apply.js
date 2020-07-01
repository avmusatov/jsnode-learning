"use strict"

let worker = {
    slow(min, max) {
        console.log(`Called with ${min},${max}`);
        return min + max;
    }
};

function cachingDecorator(func, hash) {
    let cache = new Map();
    return function () {
        let key = hash(arguments); // (*)
        if (cache.has(key)) {
            return cache.get(key);
        }

        let result = func.apply(this, arguments); // (**)

        cache.set(key, result);
        return result;
    };
}

function hash(args) {
    return args[0] + ',' + args[1];
}

worker.slow = cachingDecorator(worker.slow, hash);

console.log(worker.slow(3, 5)); // работает
console.log("Again " + worker.slow(3, 5)); // аналогично (из кеша)

//
function work(a, b) {
    console.log(a + b); // произвольная функция или метод
}

function spy(func) {
    let calls = [];

    return function wrapper() {
        let args = Array.from(arguments);
        calls.push(args);
        wrapper.calls = calls;
        func.apply(this, args);
    }
}

work = spy(work);

work(1, 2);
work(4, 5);

for (let args of work.calls) {
    console.log('call:' + args.join());
}

//
function f(x) {
    console.log(x);
}

function delay(f, ms) {
    return function wrapper() {
        setTimeout(() => {
            f.apply(this, arguments);
        }, ms);
    }
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

//f1000("test");
//f1500("test2");

//
function debounce(f, ms) {
    let prevCallTime = 0;

    return function () {
        let callTime = Date.now();
        if (Math.abs(callTime - prevCallTime) > ms) {
            prevCallTime = callTime;
            f.apply(this, arguments);
        }
    }
}

let fn = debounce(console.log, 1000);

fn(1);
fn(2);

//setTimeout(() => fn(3), 1000);
//setTimeout(() => fn(4), 1500);

//
function throttle(func, ms) {
    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {

        if (isThrottled) { // (2)
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments); // (1)

        isThrottled = true;

        setTimeout(function () {
            isThrottled = false; // (3)
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}

let fn1000 = throttle(console.log, 1000);

fn1000(1);
fn1000(2);
fn1000(3);