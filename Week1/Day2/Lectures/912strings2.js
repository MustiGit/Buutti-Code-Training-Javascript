/* 2. Write a program that takes in a string of arbitrary length and outputs a modified string that... 
(example `` node .\modifyString.js “super cool morning and hello world” ``●...has no white spaces in the beginning 
or end●...has a maximum length of 20●...never starts with a capital letter */

let string = process.argv[2];

string = string.trim();

string = string.charAt(0).toLowerCase() + string.slice(1);

console.log(string.substring(0,20));

