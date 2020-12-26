import readline from "readline-sync";
import fs from "fs";

const User = function(id, name, password, balance, fundRequests) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.balance = balance;
    this.fundRequests = fundRequests;
};

let user = new User(0, "", "", 0, []);
let allUsers = [];
let currentLoc = "start";
let running = true;
let input = "";

while (running) {
    if (currentLoc === "start") {
        console.log("-----------------------------");
        console.log("Welcome to MustGet Banking CLI!");
        console.log("Choose an option:");
        console.log("login ----------> LOGIN");
        console.log("createAccount --> CREATE ACCOUNT");
        console.log("quit -----------> SHUTDOWN THE CLI");

        input = readline.question(">> ");

        if (input === "quit") {
            console.log("Exiting....");
            running = false;
        } else if (input === "help") {
            printHelp();
        } else if (input === "login") {
            login();
        } else if (input === "createAccount") {
            createAccount();
        } else {
            currentLoc = "start";
        }
    } else if (currentLoc === "menu") {
        console.log("-----------------------------");
        console.log("Welcome " + user.name + "!\n");
        console.log("Choose an option:");
        console.log("modifyAccount --> MODIFY ACCOUNT");
        console.log("closeAccount ----------> CLOSE ACCOUNT");
        console.log("logout -----------> LOG OUT FROM ACCOUNT");

        input = readline.question(">> ");

        if (input === "modifyAccount") {
            modifyAccount();
        } else if (input === "closeAccount") {
            closeAccount();
        } else if (input === "logout") {
            logOut();
        } else {
            currentLoc = "menu";
        }
    }
}

function printHelp() {
    console.log("-----------------------------");
    console.log("Here’s a list of commands you can currently use!");
    console.log("-----------------------------");
    if (currentLoc === "start") {
        console.log("-----------------------------");
        console.log("createAccount -- > Opens dialog for creating an account.");
        console.log("login -- > Opens a dialog for logging in.");
        console.log("help -- > Show this help info");
        console.log("-----------------------------");
        console.log("quit -- > Shut down the CLI");
    } else if (currentLoc === "menu") {
        console.log("-----------------------------");
        console.log("account -- > Show options for closing, modifying and checking if account exists");
        console.log("funds -- > Show options for withdraw/transfer/deposits and fund-requests");
        console.log("-----------------------------");
        console.log("logout -- > Opens a dialog for logging out.");
    } else if (currentLoc === "accounts") {
        console.log("-----------------------------");
        console.log("Accounts:");
        console.log("closeAccount -- > Opens a dialog for closing an account.");
        console.log("modifyAccount -- > Opens a dialog for modifying an account.");
        console.log("doesAccountExist -- > Opens a dialog for checking if the account exists.");
        console.log("-----------------------------");
        console.log("return -- > Return to menu");
    } else if (currentLoc === "funds") {
        console.log("-----------------------------");
        console.log("Funds:");
        console.log("withdrawFunds -- > Opens a dialog for withdrawing funds.");
        console.log("depositFunds -- > Opens a dialog for depositing funds.");
        console.log("transferFunds -- > Opens a dialog for transferring funds to another account.");
        console.log("-----------------------------");
        console.log("Requests:");
        console.log("requestFunds -- > Opens a dialog for requesting another user for funds.");
        console.log("fundRequests -- > Shows all the requests for the account funds.");
        console.log("acceptFundRequest -- > Opens a dialog for accepting a fund request.");
        console.log("-----------------------------");
        console.log("help -- > Show this help info");
        console.log("-----------------------------");
    }
}

function createAccount() {
    console.log("Ok, let create a new account!");

    user = new User(newID(), "", "", 0, []);

    user.name = readline.question("What is your name?\n>> ");
    user.password = readline.question("Please give us password " +
    "for this account:\n>> ");
    console.log(`Hello ${user.name}! It's nice to have you as a client!`);

    let depositAmount = readline.question("How much cash you want to " +
    "deposit? (10€ is the minimum)" +
    "Or 'quit' to go back to start: \n>> ");

    while ((depositAmount != "quit") && (depositAmount < 10)) {
        depositAmount = readline.question("Please enter the amount, minimum " +
        "is 10€ (Or 'quit' to go back to start: \n>> ");
    }

    if (depositAmount === "quit") {
        currentLoc = "start";
    } else if (depositAmount >= 10) {
        user.balance = depositAmount;

        console.log("Welcome " + user.name + "! You now have an account (ID: " +
        user.id + ") with balance of: " + user.balance + ".");

        console.log("In future, you will use your ID and "+
        "password to login at any Mustget Banking CLI");

        toFile({id: user.id, name: user.name, password: user.password,
            balance: user.balance, fundRequests: user.fundRequests});
    }
    user = {};
}

function login() {
    currentLoc = "login";

    let loginID = "";
    let loginPassword = "";

    console.log("-----------------------------");
    console.log("LOGIN");
    console.log("-----------------------------");

    loginID = readline.question("Please enter your ID:\n>> ");

    if (loginID === "quit") {
        currentLoc = "start";
    } else {
        loginPassword = readline.question("Please enter your password:\n>> ");
        if (loginPassword === "quit") {
            currentLoc = "start";
        } else {
            const allUsers = JSON.parse(fs.readFileSync("./accountDetails.json", "utf8"));

            const loginCheck = allUsers.some((x)=> x.id === loginID && x.password == loginPassword);

            if (loginCheck) {
                const userArr = allUsers.filter(function(x) {
                    return x.id === loginID;
                } );
                user = new User(userArr[0].id, userArr[0].name, userArr[0].password,
                    userArr[0].balance, userArr[0].fundRequests);

                console.log("Login successful.");
                currentLoc = "menu";
            } else {
                console.log("\nThe ID or password is incorrect, please try again. (or 'quit' to go back to start)");
                login();
            }
        }
    }
}

function toFile(saveData) {
    allUsers = JSON.parse(fs.readFileSync("./accountDetails.json", "utf8"));
    allUsers.push(saveData);

    fs.writeFileSync("./accountDetails.json", JSON.stringify(allUsers), "utf8", (err) => {
        if (err) {
            console.log("Could not save userData to file!");
        }
    });
}

function newID() {
    return (Date.now() + ( (Math.random()*100000).toFixed()));
}

function logOut() {
    input = readline.question("Are you sure you want to log out? (yes / no)\n>> ");
    if (input === "yes") {
        console.log("Logging out, thanks for using MustGet Banking CLI!");
        // Clear user
        user = {};
        // If user wants to logout, return back to beginning of program
        currentLoc = "start";
    } else if (input === "no") {
        console.log("Ok, returning to menu");
        // If user doesn't want to logout, return back to menu.
        currentLoc = "menu";
    }
}

function closeAccount() {
    input = readline.question("Are you sure you want to close your account? " +
    user.id + " (yes / no)\n>> ");
    if (input === "yes") {
        console.log("Ok, closing account and returning to start");
        // Read data from accountDetails, add it to allUsers
        allUsers = JSON.parse(fs.readFileSync("./accountDetails.json", "utf8"));
        // Filter allUsers, removing items with current user.id
        allUsers = allUsers.filter(function( obj ) {
            return obj.id!== user.id;
        });
        // Saving modified allUsers back to accountDetails.json file
        fs.writeFileSync("./accountDetails.json", JSON.stringify(allUsers), "utf8", (err) => {
            if (err) {
                console.log("Could not save userData to file!");
            }
        });
        // Clear user
        user = {};
        // Set currentLoc to start, returning back to beginning of program
        currentLoc = "start";
    } else if (input === "no") {
        console.log("Ok, returning to menu");
        // set currentLock to menu, returning back to menu
        currentLoc = "menu";
    }
}
