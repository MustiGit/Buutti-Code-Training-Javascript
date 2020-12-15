/* Create a programs that reverses each word in a string.
node .\reverseWords.js "this is a very long sentence"
-> sihT si a yrev gnol ecnetnes */

const input = process.argv[2];

const reverseWords = (input) => {
    let reversed = "";
    reversed = input.split(" ") // Split the string with spaces
        .map((word) => {
            return word
                .split("")
                .reverse()
                .join("");
        })
        .join(" ");
    return reversed; // Return new string
};

console.log(reverseWords(input));
