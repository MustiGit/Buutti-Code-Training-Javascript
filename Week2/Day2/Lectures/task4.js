/* const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];

From the elements of this array,

1. create a new array with only the numbers
that are divisible by three.
2. Create a new array from original array (arr),
where each number is multiplied by 2
3. Sum all of the values in the array using the array method reduceconsole.log
the result after each step */

// 1
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21, 22];

const modArray = arr.filter(function(div) {
    return div % 3 == 0;
} );

console.log(modArray);

// 2

/**
 * Function takes number and returns it's multiplied value
 * @param {number} num - number to calculate multiply for
 * @return {number} - returns answer
 */
function mapFunc(num) {
    return num*2;
};

const modArray2 = arr.map(mapFunc);

console.log(modArray2);

// 3

const sum = arr.reduce(function(accumulator, element) {
    return accumulator + element;
}, 0);

console.log(sum);
