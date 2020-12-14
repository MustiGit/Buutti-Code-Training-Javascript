const inputA = Number(process.argv[2]);

let sum = 0;

for (let i = 0; i <= inputA; i++) {
    sum = sum + i;
}

console.log("For loop says: " + sum);

let ind = 0;
sum = 0;
while (ind <= inputA) {
    sum = sum + ind;
    ind++;
}

console.log("While loop says: " + sum);
