import readline from "readline-sync";
import {user, currentLoc, changeCurrentLoc, login, logOut, printHelp, createAccount, modifyAccount, closeAccount,
    doesAccountExist, transferFunds, depositFunds, withdrawFunds, requestFunds, fundRequests} from "./functions.js";

let running = true;
let command = "";

/* ***** MENU NAVIGATION ****** Program always returns back to currentLoc location,
when user is finished with task or wants to return in previous menu */
while (running) {
    switch (currentLoc) {
    // Starting menu with Login, Account creation and quit options
    case "start":
        console.log("-----------------------------");
        console.log("Welcome to MustGet Banking CLI!");
        console.log("Choose an option:");
        console.log("login ----------> LOGIN");
        console.log("createAccount --> CREATE ACCOUNT");
        console.log("quit -----------> SHUTDOWN THE CLI");

        const startCommands = {
            help: () => printHelp(),
            login: () => login(),
            createaccount: () => createAccount(),
            default: () => changeCurrentLoc("start"),
        };

        command = readline.question(">> ");
        command = command.toLowerCase();

        if (command === "quit") {
            console.log("Exiting...");
            running = false;
        } else {
            startCommands[command] ? startCommands[command]() : startCommands["default"]();
        }

        break;

    // Menu after login with account and fund options
    case "menu":
        console.log("\n-----------------------------");
        console.log("Welcome " + user.name + "!\n");
        console.log("Choose an option:");
        console.log("account --> ACCOUNT OPTIONS");
        console.log("funds ----> FUNDS AND REQUESTS");
        console.log("-----------------------------");
        console.log("logout ---> LOG OUT FROM ACCOUNT");

        const menuCommands = {
            printhelp: () => printHelp(),
            account: () => changeCurrentLoc("account"),
            funds: () => changeCurrentLoc("funds"),
            logout: () => logOut(),
            default: () => changeCurrentLoc("menu"),
        };

        command = readline.question(">> ");
        menuCommands[command] ? menuCommands[command]() : menuCommands["default"]();

        break;

    // Account menu includes options to modify account, close account and check if account exists
    case "account":
        console.log("Current account: " + user.name + ", (ID: " + user.id + ")\n");
        console.log("Choose an option:");
        console.log("modifyAccount --> MODIFY ACCOUNT");
        console.log("closeAccount ----------> CLOSE ACCOUNT");
        console.log("doesAccountExist -- > CHECK BY ID IF ACCOUNT EXISTS");
        console.log("return -----------> RETURN TO MENU");

        const accountCommands = {
            help: () => printHelp(),
            modifyaccount: () => modifyAccount(),
            closeaccount: () => closeAccount(),
            doesaccountexist: () => doesAccountExist(),
            return: () => changeCurrentLoc("menu"),
            default: () => changeCurrentLoc("account"),
        };

        command = readline.question(">> ");
        accountCommands[command] ? accountCommands[command]() : accountCommands["default"]();

        break;

    // Funds menu allows user to deal with all fund and request options
    case "funds":
        console.log("\nCurrent account: " + user.name + ", (ID: " + user.id + ")");
        console.log("Balance: " + user.balance + "\n");
        console.log("Choose an option:");
        console.log("-----------------------------");
        console.log("Funds:");
        console.log("withdrawFunds -- > WITHDRAW FUNDS");
        console.log("depositFunds --- > DEPOSIT FUNDS");
        console.log("transferFunds -- > TRANSFER FUNDS");
        console.log("-----------------------------");
        console.log("Requests:");
        console.log("requestFunds -- > REQUEST FUNDS FROM ANOTHER USER");
        console.log("fundRequests -- > SHOW PENDING FUND REQUESTS");
        console.log("-----------------------------");
        console.log("return -----------> RETURN TO MENU");

        const fundsCommands = {
            help: () => printHelp(),
            withdrawfunds: () => withdrawFunds(),
            depositfunds: () => depositFunds(),
            transferfunds: () => transferFunds(),
            requestfunds: () => requestFunds(),
            fundrequests: () => fundRequests,
            return: () => changeCurrentLoc("menu"),
            default: () => changeCurrentLoc("funds"),
        };

        command = readline.question(">> ");
        fundsCommands[command] ? fundsCommands[command]() : fundsCommands["default"]();

        break;

    default:
        changeCurrentLoc("menu");
        break;
    }
}

// ****** END OF MENU NAVIGATION ******
