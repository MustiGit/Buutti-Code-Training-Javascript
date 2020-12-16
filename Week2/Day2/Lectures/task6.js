/* Create a program that joins two arrays together. If the same value
appears in both arrays, the function should return that value only once.

[1, 2, 3, 4][3, 4, 5, 6]
return [1, 2, 3, 4, 5, 6]

Use different ways to..

Get to know Array.concat() method or spread syntax */

const arr = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const mergedArr = arr.concat(arr2);

noDubArr = mergedArr.filter((item, index)=>{
    return (mergedArr.indexOf(item) == index);
});

console.log(noDubArr);
