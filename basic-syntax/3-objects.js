"use strict"

const welcome = person => {
    console.log(`Ave, ${person.name}!`);
};

const persons = {
    marcus: { name: "Marcus"},
    mao: { name: "Mao" },
    rene: { name: "Rene"},
}

for (const name in persons) {
    const person = persons[name];
    welcome(person);
}
