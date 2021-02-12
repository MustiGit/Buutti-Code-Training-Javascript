/* const students = [    {name: "markku", score: 99},
{name: "karoliina", score: 58},    {name: "susanna", score: 69},
{name: "benjamin", score: 77},    {name: "isak", score: 49},
{name: "liisa", score: 89},];

●Find the highest, lowest scoring person.
●Then find the average score of the students.
●Then print out only the students who scored higher than the average.
● Assign grades 1-5 for each student based on their scores like this:
"1": "1-39",    "2": "40-59", "3": "60-79",    "4": "80-94",    "5": "95-100" */

const students = [{name: "markku", score: 99},
    {name: "karoliina", score: 58}, {name: "susanna", score: 69},
    {name: "benjamin", score: 77}, {name: "isak", score: 49},
    {name: "liisa", score: 89}];

let max = 0;
let min = 100;
let nameMax = "";
let nameMin = "";
const avgArr = [];

students.forEach(function(entry) {
    const value = entry.score;

    avgArr.push(entry.score);

    if (value > max) {
        max = value;
        nameMax = entry.name;
    }

    if (value < min) {
        min = value;
        nameMin = entry.name;
    }
});

console.log("Highest score: " + nameMax + ": " +
max + " and lowest score: " + nameMin + ": " + min);

// Calculating average of score array
const average = (avgArr) => avgArr.reduce((a, b) => a + b) /
students.length;

const avgScore = average(avgArr);
console.log("Average score: " + avgScore);

console.log("\nOver average score: ");

students.forEach(function(entry) {
    const value = entry.score;

    if (value > avgScore) {
        console.log(entry);
    }

    if (value >= 1 && value <= 39) {
        console.log(entry);
    }
});

// Add grade, depending on score

for (let i = 0; i < students.length; i++) {
    if ((students[i].score) >= 1 &&
    (students[i].score <= 39)) {
        students[i].grade = 1;
    } else if ((students[i].score) >= 40 &&
    (students[i].score <= 59)) {
        students[i].grade = 2;
    } else if ((students[i].score) >= 60 &&
    (students[i].score <= 79)) {
        students[i].grade = 3;
    } else if ((students[i].score) >= 80 &&
    (students[i].score <= 94)) {
        students[i].grade = 4;
    } else if ((students[i].score) >= 95 &&
    (students[i].score <= 100)) {
        students[i].grade = 5;
    }
}

console.log("\nAdding grades: ");
console.log(students);
