/* Create a program that takes in 3 names and outputs only
initial letters of those name separated with dot.

example: node .\initialLetters.js Jack Jake Mike -> j.j.m */

// Take 3 names and check first character, then put it to lower case
const iLetter1 = process.argv[2].charAt(0).toLowerCase();
const iLetter2 = process.argv[3].charAt(0).toLowerCase();
const iLetter3 = process.argv[4].charAt(0).toLowerCase();

console.log(iLetter1 + "." + iLetter2 + "." + iLetter3);
