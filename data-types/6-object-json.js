"use strict"

let room = {
    number: 23,
}

let meetup = {
    title: "Conference",
    participants: [{name: "Jonh"}, {name: "Alice"}],
    place: room,
}

room.occupiedBy = meetup;
meetup.self = meetup;

let replacer = (key, value) => {
    return (key && value === meetup) ? undefined: value;
};

let jsonString = JSON.stringify(meetup, replacer);

console.log(jsonString);