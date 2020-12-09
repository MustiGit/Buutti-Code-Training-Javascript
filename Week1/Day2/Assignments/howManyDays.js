/* Create a program that takes in a number from commandline
that represents month of the year. Use console.log to show
how many days there are in the given month number */

const monthNumber = Number(process.argv[2]);

if (
    monthNumber === 1 ||
    monthNumber === 3 ||
    monthNumber === 5 ||
    monthNumber === 7 ||
    monthNumber === 8 ||
    monthNumber === 10 ||
    monthNumber === 12) {
    console.log("31 days");
} else if (
    monthNumber === 4 ||
    monthNumber === 6 ||
    monthNumber === 9 ||
    monthNumber === 11) {
    console.log("30 days");
} else if (
    monthNumber === 2) {
    console.log("28 days");
} else {
    console.log("Please enter number between 1-12");
}
