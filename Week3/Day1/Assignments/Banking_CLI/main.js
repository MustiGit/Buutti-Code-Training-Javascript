import readline from "readline-sync";
import {user, currentLoc, changeCurrentLoc, login, logOut, printHelp, createAccount, modifyAccount, closeAccount,
    doesAccountExist, transferFunds, depositFunds, withdrawFunds, requestFunds, fundRequests} from "./functions.js";

let running = true;
let input = "";

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

        input = readline.question(">> ");

        switch (input.toLowerCase()) {
        case "quit":
            console.log("Exiting....");
            running = false;
            break;

        case "help":
            printHelp();
            break;

        case "login":
            login();
            break;

        case "createaccount":
            createAccount();
            break;

        default:
            changeCurrentLoc("start");
            break;
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

        input = readline.question(">> ");

        switch (input.toLowerCase()) {
        case "account":
            changeCurrentLoc("account");
            break;
        case "funds":
            changeCurrentLoc("funds");
            break;
        case "logout":
            logOut();
            break;
        default:
            changeCurrentLoc("menu");
            break;
        }

        break;

    // Account menu includes options to modify account, close account and check if account exists
    case "account":
        console.log("Current account: " + user.name + ", (ID: " + user.id + ")\n");
        console.log("Choose an option:");
        console.log("modifyAccount --> MODIFY ACCOUNT");
        console.log("closeAccount ----------> CLOSE ACCOUNT");
        console.log("doesAccountExist -- > CHECK BY ID IF ACCOUNT EXISTS");
        console.log("return -----------> RETURN TO MENU");

        input = readline.question(">> ");

        switch (input.toLowerCase()) {
        case "modifyaccount":
            modifyAccount();
            break;

        case "closeaccount":
            closeAccount();
            break;

        case "doesaccountexist":
            doesAccountExist();
            break;

        case "return":
            changeCurrentLoc("menu");
            break;

        default:
            changeCurrentLoc("account");
            break;
        }

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

        input = readline.question(">> ");

        switch (input.toLowerCase()) {
        case "withdrawfunds":
            withdrawFunds();
            break;

        case "depositfunds":
            depositFunds();
            break;

        case "transferfunds":
            transferFunds();
            break;

        case "requestfunds":
            requestFunds();
            break;

        case "fundrequests":
            fundRequests();
            break;

        case "return":
            changeCurrentLoc("menu");
            break;

        default:
            changeCurrentLoc("funds");
            break;
        }

        break;

    default:
        changeCurrentLoc("menu");
        break;
    }
}

// ****** END OF MENU NAVIGATION ******
