import readline from "readline-sync";

const printHelp = () => {
    console.log("-----------------------------");
    console.log("Here´s a list of commands that I can execute!");
    console.log("help: Opens this dialog.");
    console.log("hello: I will say hello to you");
    console.log("botInfo: I will introduce myself");
    console.log("botName: I will tell my name");
    console.log("botRename: You can rename me");
    console.log("forecast: I will forecast tomorrows weather 100% accurately");
    console.log("quit: Quits the program.");
    console.log("-----------------------------");
};

const forecast = () => {
    console.log("Tomorrow's forecast: ");
    console.log("-----------------------------");
    console.log("Temperature: " + (Math.floor(Math.random() * 100) - 50) +
     " celsius degree");

    const randomCloudy = Math.random() < 0.5;
    if (randomCloudy) {
        console.log("Cloudy: yes");
    } else {
        console.log("Cloudy: no");
    }
    const randomSunny = Math.random() < 0.5;
    if (randomSunny) {
        console.log("Sunny: yes");
    } else {
        console.log("Sunny: no");
    }
    const randomWindy = Math.random() < 0.5;
    if (randomWindy) {
        console.log("Windy: yes");
    } else {
        console.log("Windy: no");
    }
};

let helloCounter = 0;
let helpCounter = 0;
let botInfoCounter = 0;
let botName = "Perttibotti";
let botRenameCounter = 0;
let forecastCounter = 0;
let nameSuggestion = "";
let confirmation = "";

let running = true;
console.log("Welcome to a dumb chatbooooot! Type help for available commands");
while (running) {
    const input = readline.question(">> ");

    if (input === "quit") {
        running = false;
    } else if (input === "help") {
        printHelp();
        helpCounter++;
    } else if (input === "hello") {
        const userName = readline.question("What is your name? ");
        console.log(`Well hello there ${userName}!`);
        helloCounter++;
    } else if (input === "botInfo") {
        botInfoCounter++;
        console.log("I have been counting everything you do!");
        console.log(`hello: ${helloCounter}`);
        console.log(`help: ${helpCounter}`);
        console.log(`botInfo: ${botInfoCounter}`);
        console.log(`forecast: ${forecastCounter}`);
        console.log(`My name has been changed: ${botRenameCounter} times.`);
    } else if (input === "botName") {
        console.log(`My name is currently: ${botName}`);
    } else if (input === "botRename") {
        console.log(`I'm quite happy with my name ${botName}, but ok!`);
        nameSuggestion = readline.question("Type my new name please? ");
        confirmation = readline.question("Are you happy with: " +
        nameSuggestion + "?");

        if (confirmation === "No") {
            console.log(`Then I shall stay as the mighty ${botName} `);
        } else if (confirmation === "Yes") {
            botName = nameSuggestion;
            console.log(`Then I shall be called the mighty ${botName} `);
            botRenameCounter++;
        } else {
            console.log(`Then I shall stay as the mighty ${botName} `);
        }
    } else if (input === "forecast") {
        forecast();
        forecastCounter++;
    }
}
