/* Create a program that takes in 3 names, and compares the
length of those names. Print out the names ordered so that
the longest name is first

example: node .\lengthcomparison.js Maria Joe Philippa -> Philippa Maria Joe
*/

// Take names
const name1 = process.argv[2];
const name2 = process.argv[3];
const name3 = process.argv[4];

// Put names in array
const names = [
    {name: name1, length: name1.length},
    {name: name2, length: name2.length},
    {name: name3, length: name3.length},
];

// Sort array on length
names.sort(function(a, b) {
    return b.length - a.length;
});

// Log results in index order
console.log(names[0].name + " " + names[1].name + " " + names[2].name);

