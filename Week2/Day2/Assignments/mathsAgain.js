/* Define a number n that is larger than 0, for example n = 3
Create a function that given parameter n finds the number of steps it
takes to reach number 1 (one) using the following process

If n is even, divide it by 2
If n is odd, multiply it by 3 and add 1

Example:
For n = 3 the process would be following
3 is odd     →  n = 3 * 3 + 1 = 10
1: 10 is even  →  n = 10 / 2 = 5
2: 5 is odd     →  n = 3 * 5+1 = 16
3: 16 is even  →  n = 16 / 2 = 8
4: 8 is even   →  n = 8 / 2 = 4
5: 4 is even   →  n = 4 / 2 = 2
6: 2 is even   →  n = 2 / 2 = 1
And finally we reached nr. 1 after 6 steps */

console.log(numberUno(6));

/**
 * Function compares arrays and checks for matches
 * and returns calculated score
 * @param {number} n - Takes in number
 * @return {any} Returns 0 if score is < 0, else score
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
