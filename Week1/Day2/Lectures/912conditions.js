
// The game hearts can only be played with 4 people (playerCount)

const playerCount = 4;

if (playerCount === 4) {
console.log("Can be played!")
}


// Mark is happy when he is not stressed or if he has ice cream (isStressed, hasIcecream)

const isStressed = true;
const hasIceCream = true;

if (!(isStressed) || (hasIceCream)) {
console.log("Mark is happy!")
}


// It is a beach day if the sun is shining, it is not raining and the temperature is 20 degrees Celsius or above

const sunShining = true;
const temperature = 21;
const isRaining = false;

if ((sunShining && temperature >= 20) && !(isRaining)){
console.log("It's a beach day!")
}


// Arin is happy if he sees either Suzy or Dan on Tuesday night. 
// However, seeing them both at the same time, or being alone, makes him sad.


const isTuesday = true;
const isAlone = false;
const meetsDan = false;
const meetsSuzy = true;

if ((isTuesday && isAlone === false) && !(meetsDan && meetsSuzy)) {
console.log("Arin is happy!");
}


// Check if it's lear year.

const daysInYear = 366;

if (daysInYear > 365) {
    console.log("It's a leap year!")
}