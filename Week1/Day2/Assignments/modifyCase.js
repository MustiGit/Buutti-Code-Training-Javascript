/* Create a program that takes in a string, and modifies the every letter
of that string to upper case or lower case, depending on the input
example: node .\modifycase.js lower "Do you LIKE Snowmen?" ->
do you like snowmen.

example: node .\modifycase.js upper "Do you LIKE Snowmen?" ->
DO YOU LIKE SNOWMEN

NOTE remember to take in the 2nd parameter with quotation marks */

const modifierInput = process.argv[2];
const stringInput = process.argv[3];

if (modifierInput === "lower") {
    console.log(stringInput.toLowerCase());
} else {
    console.log(stringInput.toUpperCase());
}
