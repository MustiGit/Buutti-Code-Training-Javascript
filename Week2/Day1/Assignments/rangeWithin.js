/* Write a program that takes in any two numbers from the command line,
start and end. The program creates and prints an array filled with
numbers from start to end.

Examples:
node .\createRange.js 1 5 -> [1, 2, 3, 4, 5]
node .\createRange.js -5 -1 -> [-5, -4, -3, -2, -1]
node .\createRange.js 9 5 -> [9, 8, 7, 6, 5]

Note the order of the values. When start is smaller than end,
the order is ascending and when start is greater than end,
order is descending. */


const input = Number(process.argv[2]);
const input2 = Number(process.argv[3]);
const numArray = [];

if (input <= input2) {
    for (let i = input; i <= input2; i++) {
        numArray.push(i);
    }
} else {
    for (let i = input2; i <= input; i++) {
        numArray.unshift(i);
    }
}

console.log(numArray);
