/* const arr = [1, 4, 6, 32, 25, 16, 31, 15, 10, 2, 7]

;Print out the largest number found in this array. */

const arr = [1, 4, 6, 32, 25, 16, 31, 15, 10, 2, 7];

const largest = Math.max(...arr);

console.log("With Math.max: " + largest);

// Without Math.max

let max = 0;
let second = 0;

for (let i=1; i <= arr.length; i++) {
    const value = arr[i];
    if (value > max) {
        max = value;
    } else if (value < max && value > second) {
        second =value;
    }
}

console.log("Without Math.max, using for loop: " + max);

console.log("Second largest: " + second);


