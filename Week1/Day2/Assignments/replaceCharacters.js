/* Create a program that takes in a string, and replaces every
occurrence of your given character with your other given character.

example: node .\replacecharacters.js g h "I have great grades for my
grading" -> I have hreat hrades for my hrading */

const char1 = process.argv[2];
const char2 = process.argv[3];
const stringInput = process.argv[4];

console.log(modFunction(stringInput, char1, char2));

/**
 * Function modifies given string, replacing char1 with char2.
 * @param {string} stringInput - string to be modified
 * @param {string} char1 - character to be replaced
 * @param {string} char2 -  character to replace with
 * @return {string}- returns modified string
 */
function modFunction(stringInput, char1, char2) {
    char1 = char1.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    const re = new RegExp(char1, "g");
    return stringInput.replace(re, char2);
}

