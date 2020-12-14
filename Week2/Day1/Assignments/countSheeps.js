/* Create a program that takes in a number from the command line, for
 example node .\countSheep.js 3 and prints a string "1 sheep...2
 sheep...3 sheep..." */

const input = Number(process.argv[2]);
let string = "";

for (let i=1; i <= input; i++) {
    string = string.concat(i + " sheep...");
}
console.log(string);
