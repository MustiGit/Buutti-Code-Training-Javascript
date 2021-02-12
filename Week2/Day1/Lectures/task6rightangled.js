/* Create a program that takes in a number n
and prints out a triangle of &’s with the height of n*/

const n = Number(process.argv[2]);
let arr = [];

// Level 1

for (let i=1; i <= n; i++) {
    arr = [];
    for (let j = 1; j <= i; j++) {
        arr.push("&");
    }
    console.log(arr.join(""));
}

/*

for (let i = 1; i <= n; i++) {
    console.log(mark.repeat(i));
}

*/

// Level 2

for (let i=1; i <= n; i++) {
    let s = "";
    for (let j = 1; j <= (2*n-1); j++) {
        (j >= n + 1 - i && j <= n - 1 + i) ? s += "&" : s += " ";
    }
    console.log(s);
}

// Level 3 KESKEN

let ind = 1;
let ind2 = 1;

while (ind <= n) {
    s = "";
    ind++;

    while (ind2 <= (2*n-1)) {
        (ind2 >= n + 1 - ind && ind2 <= n - 1 + ind) ? s += "*" : s += " ";
        ind2++;
    }
    console.log(s);
}

