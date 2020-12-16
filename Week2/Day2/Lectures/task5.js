/* Find the first non-repeating character from a string.
For example, in “aabbooooofffkkccjdddTTT” it would be “j” */

const str = "aabbooooofffkkccjdddTTT";

/**
 * Function takes a string and check for first non-repeating character
 * @param {string} str - string to check first non-repeating character for
 * @return {string} - returns answer
 */
function firstNonRepeatingCharacter(str) {
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
            return char;
        }
    }
    return "_";
}

console.log(firstNonRepeatingCharacter(str));

// FIND!!!
strArr = str.split("");

/* const char = strArr.find((element, index) =>
element!==strArr[index-1]&&element!==strArr[index+1]); */
