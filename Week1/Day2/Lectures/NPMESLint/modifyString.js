// Write a program that takes in a string
// of arbitrary length and
// outputs a modified string that…
// (example `` node .\modifyString.js “super cool morning and hello world” ``

let str = process.argv[2];

str = str.trim();
if (str.length > 20) {
    str = str.substring(0, 20);
}

str = str.charAt(0).toLowerCase() +
        str.substring(1);


console.log(str);
