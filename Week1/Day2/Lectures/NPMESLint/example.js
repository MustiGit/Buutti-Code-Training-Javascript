// if else exercise
// a
const playerCount = 2;

if (playerCount === 4) {
    console.log("game of hearts can be played");
}

// b
const isStressed = true;
const hasIceCream = false;

if (!isStressed || hasIceCream) {
    console.log("mark is happy");
}

// c
const sunIsShining = true;
const isRaining = true;
const temperature = 17; // degrees celsius
if (
    sunIsShining &&
    !isRaining &&
    temperature >= 20
) {
    console.log("it's a beach day");
}

// d
const seesSuzy = true;
const seesDan = true;
const isTuesday = true;
if (isTuesday &&
    (seesDan || seesSuzy) &&
    !(seesDan && seesSuzy)
) {
    console.log("Arin is Happy");
} else {
    console.log("Arin is sad");
}

// 2

const givenYear = 1885;

if (
    (givenYear % 4 === 0 && givenYear % 100 !== 0) ||
    (givenYear % 100 === 0 && givenYear % 400 === 0)
) {
    console.log("is leap year");
}

// string exercise 1
const str1 = "Jotain";
const str2 = "jotain muuta";

console.log(str1 + str2);
console.log(`${str1} ${str2}`);

console.log(`str1 length: ${str1.length}`);


const strAvg = (str1.length + str2.length) / 2;

console.log(str1.length < strAvg ?
    str1 : "");
console.log(str2.length < strAvg ?
    str2 : "");

