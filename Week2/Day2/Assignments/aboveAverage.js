/* Create a function that takes in an array and returns a
new array of values that are above average.

aboveAverage([1, 5, 9, 3]) // outputs an array that has
values greater than 4.5 */

console.log(aboveAverage([1, 5, 9, 3]));

/**
 * Function takes array and calculates average
 * then it makes new array that contains only numbers higher than average
 * @return {string} Returns new array with > average numbers
 */
function aboveAverage(...parameters) {
    const values = parameters;
    let total = 0;
    const newArr = [];

    for (let i = 0; i < values[0].length; i++) {
        total += parseInt(values[0][i]);
    }

    const average = (total / values[0].length);

    for (let i = 0; i < parameters[0].length; i++) {
        if (parameters[0][i] > average) {
            newArr.push(parameters[0][i]);
        }
    }
    return newArr;
}
