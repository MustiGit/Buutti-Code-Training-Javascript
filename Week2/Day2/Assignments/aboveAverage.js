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
function aboveAverage([...parameters]) {
    // Check for each parameter element and add parsed value to total
    const total = parameters.reduce((total, value) => total +
    parseInt(value), 0);

    // Calculate average score
    const average = (total / parameters.length);

    // Make newArr for from parameter numbers that are over average value
    const newArr = [];
    parameters.forEach((num) => (num > average) ? newArr.push(num) : null);

    return newArr;
}
