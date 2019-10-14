"use strict"

const p1 = {
    x: 20,
    y: 10,
    move(x,y) {
        this.x += x;
        this.y += y;
    },
    toString(){
        return `[${this.x}, ${this.y}]`
    },
}

p1.move(30,40);
console.log(p1);
console.log(p1.toString());