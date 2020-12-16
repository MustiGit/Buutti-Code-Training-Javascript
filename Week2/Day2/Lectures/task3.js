const input = Number(process.argv[2]);

console.log(factorial(input));

/**
 * Function takes in two numbers and returns random between given numbers
 * @param {number} n - number to calculate factorial for
 * @return {number} - returns answer
 */
function factorial(n) {
    let answer = 1;
    if (n == 0 || n == 1) {
        return answer;
    } else {
        for (let i = n; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }
}
