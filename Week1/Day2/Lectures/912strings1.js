/* 1. Write a program which has 2 strings str1 and str2●Create a combined string str_sum by using the + operator 
or using template string and console.log the result.●Check the length of these strings using the “.length” property, 
e.g., str1.length or str2.length ( try console.logging these ).●Calculate str_avg, the average of str1.length and 
str2.length●Create if statements where you check the length of str1, str2 and str_sum and console.log the strings 
only if their length is smaller than str_avg. */

const str1 = "Helppo ";
const str2 = "nakki";

const str_sum = str1 + str2;

console.log(str_sum);
console.log("Str1 length is " + str1.length + " and Str2 length is " + str2.length )

const str_avg = (str1.length + str2.length) / 2;

console.log("Average length is: " + str_avg);

if (str1.length < str_avg) {
    console.log(str1 + " is shorter than average!")
}

if (str2.length < str_avg) {
    console.log(str2 + " is shorter than average!")
}