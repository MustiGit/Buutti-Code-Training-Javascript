/* Create a program that takes in one argument from command line,
a language code (e.g. "fi", "es", "en").
Console.log "Hello World" for the given language for atleast three languages.
It should default to console.log "Hello World". */

const inputLanguage = process.argv[2];

if (inputLanguage === "fi") {
    console.log("Terve maailma!");
} else if (inputLanguage === "en") {
    console.log("Hello World!");
} else if (inputLanguage === "se") {
    console.log("Hej världen!");
} else (console.log("Hello world!"));
