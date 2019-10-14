"use strict"

let phoneBook = [
    {
        name:'Marcus Aurelius' ,
        phone: '+3456756567',
    },
    {
        name:'Julius Cesar',
        phone: '+3848538494',
    },
    {
        name:'Zeus Stormrage',
        phone: '+3848849456',
    }
];

let phoneObj = {};

for (let i = 0; i < 3; i++){
    phoneObj[phoneBook[i].name] = phoneBook[i].phone;
}

console.log(phoneObj);

const findPhoneByName = nameToFind => {
    let phone = '';
    phoneBook.forEach(function(item) {
        if (item.name == nameToFind){
            phone = item.phone;
        }
    });
    return phone;
};

console.log(findPhoneByName("Julius Cesar"));