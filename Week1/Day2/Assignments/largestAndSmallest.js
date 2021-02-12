/* From the command line read in three numbers, number_1,
number_2 and number_3. Decide their values freely.

Find the

a) largest one
b) smallest one
c) if they all are equal, print that out

console.log() its name and value. */

const number1 = Number(process.argv[2]);
const number2 = Number(process.argv[3]);
const number3 = Number(process.argv[4]);

if (number1 === number2 && number1 === number3) {
    console.log("They are equal.");
} else {
    const largest = Math.max(number1, number2, number3);
    const smallest = Math.min(number1, number2, number3);

    console.log("Smallest number is " + smallest +
     " and largest number is " + largest);
}

