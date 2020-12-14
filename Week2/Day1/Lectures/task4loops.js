const inputA = Number(process.argv[2]);

let ind = 0;
sum = 0;
while (ind <= inputA) {
    if (ind % 3 === 0 || ind % 5 === 0) {
        sum = sum + ind;
    }
    ind++;
}

console.log("While loop says: " + sum);
