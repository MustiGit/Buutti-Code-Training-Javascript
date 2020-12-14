/*
Using for loop for each problem, print out the following number sequences:

0 100 200 300 400 500 600 700 800 900 1000
1 2 4 8 16 32 64 128
3 6 9 12 15
9 8 7 6 5 4 3 2 1 0
1 1 1 2 2 2 3 3 3 4 4 4
0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
*/

let sum = 0;
for (let i = 0; i <= 1000; i = i+100) {
    sum = sum + i + " ";
}

console.log(sum);

sum = 0;
for (let i = 1; i <= 128; i = i*2) {
    sum = sum + i + " ";
}

console.log(sum);

sum = 0;
for (let i = 3; i <= 15; i = i+3) {
    sum = sum + i + " ";
}

console.log(sum);

sum = 0;
for (let i = 9; i >= 0; i = i-1) {
    sum = sum + i + " ";
}

console.log(sum);

sum = 0;
for (let i = 1; i <= 4; i++) {
    sum = sum + i + " " + i + " " + i + " ";
}

console.log(sum);

sum = 0;

for (let i = 0; i <= 2; i++) {
    for (let i = 0; i <= 4; i++) {
        sum = sum + i + " ";
    }
}
console.log(sum);
