/* Create a function that takes in an operator and
two numbers and returns the result.

For example, if the operator is "+", sum the given numbers. In addition to sum,
calculator can also calculate differences, multiplications and divisions.
If the operator is something else, return some error
message like "Can't do that!"*/

const num1 = Number(process.argv[2]);
const operator = process.argv[3];
const num2 = Number(process.argv[4]);

console.log(calculator(num1, operator, num2));

/**
 * Function returns calculated answer
 * @param {number} num1 - Takes in number
 * @param {string} operator - Takes in string
 * @param {number} num2 - Takes in number 2
 * @return {any} Returns answer for calculation
 */
function calculator(num1, operator, num2) {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        return num1 / num2;
    } else {
        return "You must enter operator (+-/*) with two numbers, like: '2 + 2'";
    }
}

