// *** Create a program that takes in a number from command line that represents a length of a squares sides. Calculate the area of the square with given number.

const sideA = Number(process.argv[2]);
const sideB = Number(process.argv[3]);

const square = (sideA * sideB);

console.log("The area of a square with sides " + sideA + " and " + sideB + " is: " + square);