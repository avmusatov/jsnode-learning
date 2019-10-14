"use strict"

const person = {
    name: "Marcus Aurelius",
    get city(){
        return 'Roma';
    },
    set city(value){
        console.log('Marcus remains in Roma');
    },
};

person.city = 'Kiev';
console.dir(person);