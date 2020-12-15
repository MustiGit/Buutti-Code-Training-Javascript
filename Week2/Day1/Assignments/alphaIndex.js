/* const charIndex = { a : 1, b : 2, c : 3, d
    : 4, e : 5, ... , y : 25, z : 26 };
Create a program that turns any given word into charIndex version of the word
Example:
node .\charIndex.js "bead" ->  2514
node .\charIndex.js "rose" ->  1815195 */

const charIndex = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9,
    j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19,
    t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26};

const input = process.argv[2];
let conNumbers = "";

// Check every character from input, check position and add number to conNumbers
for (let i=0; i < input.length; i++) {
    const number = charIndex[input.charAt(i)];
    conNumbers = conNumbers.concat(number);
}

// conNumbers is a string
console.log(conNumbers);

// if number is needed, parseInt to numeric value
const asNumber = parseInt(conNumbers, 10);

// asNumber has the numeric value
console.log(asNumber);
