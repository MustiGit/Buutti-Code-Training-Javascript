/* const arr = ["banaani", "omena", "mandariini",
 "appelsiini", "kurkku", "tomaatti", "peruna"];
const arr = ["banaani", "omena", "mandariini",
 "appelsiini", "kurkku", "tomaatti", "peruna"];

Using this array, first print out every item
in this array.

Then print out every item that contains the letter ‘r’

Then sort the array in alphabetical order and print out again

Now remove the first item in the array, and print out again

Finally, add the item “sipuli” to the array,
 and print out again */

const arr = ["banaani", "omena", "mandariini", "appelsiini",
    "kurkku", "tomaatti", "peruna"];

console.log("\n");

// Print all
arr.forEach((item) => console.log(item));

console.log("\n");

// Print all that contains letter "r"
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].includes("r") ? arr[i] : "");
}

console.log("\n");

// Sort alphabetically and print
arr.sort();
arr.forEach((item) => console.log(item));

// Remove first and print
arr.shift();
arr.forEach((item) => console.log(item));

console.log("\n");

// Add "sipuli" in array
arr.push("sipuli");
arr.forEach((item) => console.log(item));

// parempi ratkaisu, joka ei mutatoi:

newArr = [...arr, "sipuli"];
console.log("newArr: " + newArr);
