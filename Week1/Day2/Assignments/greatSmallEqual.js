/* Create a program that takes in two numbers a and b from the command line.
Print out "a is greater" if a is bigger than b, and vice versa, and
"they are equal" if they are equal. Modify program to take in a
third string argument c, and print out "yay, you guessed the password",
if a and b are equal AND c is "hello world"*/

const inputA = Number(process.argv[2]);
const inputB = Number(process.argv[3]);

if (inputA === inputB) {
    console.log("They are equal.");
} else if (inputA > inputB) {
    console.log("A is greater!");
} else if (inputB > inputA) {
    console.log("B is greater!");
}
