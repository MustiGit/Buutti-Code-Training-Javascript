const stringToConvert = process.argv[2];

console.log(converter(stringToConvert));

/**
 * Function takes in a string and converts it toUpperCase
 * @param {string} string - string to convert
 * @return {string} - returns string in upperCase
 */
function converter(string) {
    conString = string.toUpperCase();

    return conString;
}


