'use strict'

//Functions

// Due to {} define both operators and objects!
// Due to () we say that it contains expression
// Value, steps and add are fields of object
// This function returns an objest
// "This" is a pointer to the object

const adder = (initial = 0) => ({
    value: initial,
    steps: [initial],
    add(value) {
        this.steps.push(value);
        this.value += value;
        return this;
    }
});

// {} is the body of class

const Adder = class {
    constructor(initial = 0) {
        this.steps = [initial];
        this.value = initial;
    }
    add(value){
        this.steps.push(value);
        this.value += value;
        return this;
    }
};

//Usage

{
    const {value, steps} = adder(5).add(-8).add(11);
    console.log(value);
    const [a,b,c] = steps;
    console.log(a,b,c);
};

{
    const {value, steps} = new Adder(5).add(-8).add(11);
    console.log(value);
    const [a, b, c] = steps;
    console.log(a, b, c);
};
