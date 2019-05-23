"use strict"

const welcome = person => {
    console.log(`Ave,${person.name}!`);
};

const persons = [
    { name: "Marcus"},
    { name: "Mao" },
    { name: "Rene"},
]

for (const person of persons) {
    welcome(person);
}
