/* You have two arrays:
const competitors = ['Julia', "Mark", "Spencer", "Ann" , "John", "Joe"];
const ordinals = ['st', 'nd', 'rd', 'th'];

Create program that outputs competitors placements with following way:
['1st competitor was Julia', '2nd competitor was Mark',
'3rd competitor was Spencer', '4th competitor was Ann',
'5th competitor was John', '6th competitor was Joe'] */

const competitors = ["Julia", "Mark", "Spencer", "Ann", "John", "Joe"];
const ordinals = ["st", "nd", "rd", "th"];
const modArray = [];

for (let i = 0; i < competitors.length; i++) {
    // console.log(ordinal_suffix_of(4));
    modArray.push(ordinalFunction(i+1) + " competitor was " + competitors[i]);
}

console.log(modArray);

/**
 * Function takes in number and adds compared ordinal after it
 * @param {string} i - character to check ordinal for
 * @return {string}- returns given number + correct ordinal
 */
function ordinalFunction(i) {
    const j = i % 10;
    const k = i % 100;
    if (j == 1 && k != 11) {
        return i + ordinals[0];
    }
    if (j == 2 && k != 12) {
        return i + ordinals[1];
    }
    if (j == 3 && k != 13) {
        return i + ordinals[2];
    }
    return i + ordinals[3];
}

