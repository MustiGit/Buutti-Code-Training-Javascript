const inputA = Number(process.argv[2]);
const inputB = Number(process.argv[3]);

console.log(randomNum(inputA, inputB));

/**
 * Function takes in two numbers and returns random between given numbers
 * @param {number} min - min number to convert
 * @param {number} max - max number to convert
 * @return {number} - returns a random number between min and max
 */
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
