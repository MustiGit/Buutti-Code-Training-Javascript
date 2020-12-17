/* Return the number (count) of vowels in the given string.
Let's consider a, e, i, o, u, y as vowels in this exercise.
getVowelCount('abracadabra') // 5 */

const input = process.argv[2];
console.log(getVowelCount(input));

/**
 * Function counts amount of vowels in a string
 * and returns count
 * @param {string} str - Takes in string
 * @return {any} Returns answer for calculation
 */
function getVowelCount(str) {
    // global, case insensitive regexp search -> match array
    const count = str.match(/[aeiouy]/gi);

    // if none, return 0, else return count.length
    return count === null ? 0 : count.length;
}
