/* Check if given string is a palindrome.

Examples:

 node .\checkPalindrome.js saippuakivikauppias ->
 Yes, 'saippuakivikauppias' is a palindrome
 node .\checkPalindrome.js saippuakäpykauppias ->
 No, 'saippuakäpykauppias' is not a palindrome */

const input = process.argv[2];

if (palindrome(input)) {
    console.log("Yes, " + input + " is a palindrome");
} else {
    console.log("No, " + input + " is not a palindrome");
}

/**
 * Function takes in a string and checks if it's palindrome
 * @param {string} input - string to check
 * @return {string} - returns true or false
 * @lowRegStr {string} - puts input tolowerCase and replaces re letters with ""
 * @reverseStr{string} - reverses string by splitting, reversing and joining
 */
function palindrome(input) {
    const re = /[\W_]/g;
    const lowRegStr = input.toLowerCase().replace(re, "");
    const reverseStr = lowRegStr.split("").reverse().join("");
    return reverseStr === lowRegStr;
}


