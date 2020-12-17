/* Create a "like" function that takes in a array of names.
Depending on a number of names (or length of the array)
the function must return strings as follows:

likes([]); // "no one likes this"
likes(["John"]) // "John likes this"
likes(["Mary", "Alex"]) // "Mary and Alex like this"
likes(["John", "James", "Linda"]) // "John, James and Linda like this"
likes(["Alex", "Linda", "Mark", "Max"]) // must be "Alex, Linda and 2 others

For 4 or more names, "2 others" simply increases. */

// const likes = ["Alex", "Linda", "Mark", "Max", "Pertti"];

console.log(likeFunction("Alex", "Linda", "Mark", "Stella", "JA_PERTTI"));

/**
 * Function takes in n amount of parameters and adds them in array
 * then depending on length of array, returns required style of answer
 * @return {string} Returns answer
 */
function likeFunction(...parameters) {
    const likes = parameters;

    if (likes.length === 0) {
        return "No one likes this";
    } else if (likes.length === 1) {
        return likes[0] + " likes this";
    } else if (likes.length === 2) {
        return likes[0] + " and " + likes[1] + " like this";
    } else if (likes.length === 3) {
        return likes[0] + ", " + likes[1] + " and " +
        likes[2] + " like this";
    } else if (likes.length >= 4) {
        return likes[0] + ", " + likes[1] + " and " + (likes.length-2) +
    " others like this";
    } else {
        return "Something went wrong, try again";
    }
}
