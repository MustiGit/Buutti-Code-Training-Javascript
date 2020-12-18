/*
Define a number n that is larger than 0, for example n = 3
Create a function that given parameter n finds the number of steps it
takes to reach number 1 (one) using the following process

If n is even, divide it by 2
If n is odd, multiply it by 3 and add 1
 */

console.log(numberUno(6));

/**
 * Function takes in a number (n) and does following:
 *
 * If n is odd, multiply it by 3 and add 1
 * If n is even, divide it by 2
 *
 * @param {number} n - Takes in the number
 * @return {any} Returns amount of steps it took to reach nr. 1
 */
function numberUno(n) {
    let steps = 0;
    while (n > 1) {
        console.log(n);
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = n * 3 + 1;
        }
        steps++;
    }
    return `Reached nr. 1 after ${steps} steps!`;
}
