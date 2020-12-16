/* Suppose airport runways are given numbers determined by the
direction in which planes travel as they move along the runways.

The number is found by taking the bearing in degrees and rounding
to the nearest 10 degrees and then dropping the last 0.-E.g., 267.5deg →
round 267.5deg to 270deg and discard the last 0 to get 27

Write a program where the user tells the bearing (0-360deg) and the
program outputs the corresponding runway number (Oddly this airport
has 36 runways(?!))

-Don’t use round(), floor() or ceil() functions here!
(Hint: the modulo operator might help here) */

const num = Number(process.argv[2]);

fixedFunction(num);

/**
 * Function is used for rounding given number
 * @param {number} n - Takes in number
 */
function fixedFunction(n) {
    // console.log((n%10)?n-n%10+10:n);
}
