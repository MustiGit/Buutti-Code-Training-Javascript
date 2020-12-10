/* Create a program that takes in a string and drops off the last
word of any given string, and console.logs it out.

example: node .\annoyingSubstring.js "Hey I'm alive!" -> Hey I'm */

const stringInput = process.argv[2];

console.log(stringInput.substring(0, stringInput.lastIndexOf(" ")));
