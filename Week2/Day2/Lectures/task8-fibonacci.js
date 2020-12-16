/* Create a function, takes an number n as parameter, and produces an array of
numbers, n being equal to the length of the array, that follows this sequence:

const arr = [1, 1, 2, 3, 5, 8, 13, 21, 34, ...]; */

const n = Number(process.argv[2]);


fibonacci(n);

/**
 * Function is used for looping setTimeout
 * @param {number} n - Takes in number
 */
function fibonacci(n) {
    const arr = [];
    let a = 1;
    let b = 0;
    let temp = 0;
    while (n >= 1) {
        temp = a;
        a = a + b;
        b = temp;
        n--;
        arr.push(b);
    }
    console.log(arr);
}
