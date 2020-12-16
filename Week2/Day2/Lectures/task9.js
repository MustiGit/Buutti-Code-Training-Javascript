/* A prime number is a number, that is divisible only by two numbers which
is itself and1.(NOTE: 1 is not prime)For example, 4 is not prime because it
is divisible by 2 (that is, 4/2 (= 2) is a whole number (integer))7 is a
prime: it is only divisible by 7 and 1 (7/7 and 7/1 are integers.)

TASK: Create a function that checks whether a given number is a prime
number-define a value letnum = 123;-then the algorithm (function) checks
whether the number is prime and consolelogsthe result “is prime”
or “is not prime”. */

const num = Number(process.argv[2]);
const answer = isPrime(num);

if (answer) {
    console.log("It's a prime number");
} else {
    console.log("It's not a prime number");
}

/**
 * Function is used for looping setTimeout
 * @param {number} num - Takes in number
 * @return {boolean} - returns boolean
 */
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}
