/* const array = [2, 4, 5, 6, 8, 10, 14, 18, 25, 32];

Create a program that every time you run it, prints out
an array with differently randomized order of the array above.

Example:
node .\randomizeArray.js -> [5, 4, 18, 32, 8, 6, 2, 25, 14, 10] */

const array = [2, 4, 5, 6, 8, 10, 14, 18, 25, 32];

const shuffledArray = array.sort(() => Math.random() - 0.5);

console.log(shuffledArray);
