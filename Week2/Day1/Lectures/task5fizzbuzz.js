/* Exercise: FizzBuzz

Create a program that loops through numbers from 1 to
 100 and... if the number is divisible by 3, prints “Fizz”
if the number is divisible by 5, prints “Buzz”
if the number is divisible by both (3 and 5), prints “FizzBuzz” */

for (let i=1; i < 101; i++) {
    // if (i % 15 == 0) console.log("FizzBuzz");
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else console.log(i);
}
