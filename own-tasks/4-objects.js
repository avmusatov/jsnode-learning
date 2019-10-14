"use strict"

const createUser = (name, city) => {
    let user = {
        name: name,
        city: city,
    };

    return user;
};

console.log(createUser('Marcus','Roma'));