'use strict'

//
let ucFirst = str => {
    return str[0].toUpperCase() + str.slice(1, str.length);
};

console.log("ucFirst(ave):", ucFirst("ave"));

//
let checkSpam = str => {
    const template1 = "viagra",
        template2 = "xxx";

    return str.toLowerCase().includes(template1) || str.toLowerCase().includes(template2);
};

console.log("checkSpam('buy ViAgRA now'):", checkSpam('buy ViAgRA now'));
console.log("checkSpam('free xxxxx'):", checkSpam('free xxxxx'));
console.log("checkSpam('innocent rabbit'):", checkSpam("innocent rabbit"));

//
let truncate = (str, maxLength) => {
    if (str.length > maxLength) {
        let substr = str.slice(maxLength - 1);
        str = str.replace(substr, "...");
    }
    return str;
};

console.log("truncate('Вот, что мне хотелось бы сказать на эту тему:', 20):", truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log("truncate('Всем привет!', 12):", truncate("Всем привет!", 12))

//
let extractCurrencyValue = str => {
    return str.match(/^[$€₿]\d+/)[0].slice(1);
};

console.log("parseInt('$120', 10)):", parseInt("$120", 10));
console.log("extractCurrencyValue('€120'):", extractCurrencyValue("€120"));