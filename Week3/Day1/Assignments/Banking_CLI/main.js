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
        console.log("account --> ACCOUNT OPTIONS");
        console.log("funds --> FUNDS AND REQUESTS");
        console.log("-----------------------------");
        console.log("logout -----------> LOG OUT FROM ACCOUNT");

        input = readline.question(">> ");

        if (input === "account") {
            currentLoc = "account";
        } else if (input === "funds") {
            currentLoc = "funds";
        } else if (input === "logout") {
            logOut();
        } else {
            currentLoc = "menu";
        }
    } else if (currentLoc === "account") {
        console.log("Current account: " + user.name + "(" + user.id + ")\n");
        console.log("Choose an option:");
        console.log("modifyAccount --> MODIFY ACCOUNT");
        console.log("closeAccount ----------> CLOSE ACCOUNT");
        console.log("doesAccountExist -- > CHECK BY ID IF ACCOUNT EXISTS");
        console.log("return -----------> RETURN TO MENU");

        input = readline.question(">> ");

        if (input === "modifyAccount") {
            modifyAccount();
        } else if (input === "closeAccount") {
            closeAccount();
        } else if (input === "doesAccountExist") {
            doesAccountExist();
        } else if (input === "return") {
            currentLoc = "menu";
        } else {
            currentLoc = "account";
        }
    } else if (currentLoc === "funds") {
        console.log("\nCurrent account: " + user.name + ", (" + user.id + ")");
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

        if (input === "withdrawFunds") {
            withdrawFunds();
        } else if (input === "depositFunds") {
            depositFunds();
        } else if (input === "transferFunds") {
            transferFunds();
        } else if (input === "requestFunds") {
            requestFunds();
        } else if (input === "return") {
            currentLoc = "menu";
        } else {
            currentLoc = "funds";
        }
    }
}

function requestFunds() {
    // Some
}

function transferFunds() {
    console.log("\nTRANSFER FUNDS");
    console.log("-----------------------------");
    console.log(user.name + ", (" + user.id + ")");
    console.log("Current balance: " + Math.floor(user.balance* 100) / 100);
    console.log("-----------------------------");
    const transferAmount = readline.question("How much money do you want to transfer (min. 1)?\n>> ");

    if (transferAmount === "quit") {
        currentLoc = "funds";
    } else if (transferAmount >= 1) {
        const transferTarget = readline.question("Which ID will receive transfer? (or 'quit' to go back)\n>> ");

        const userArray = JSON.parse(fs.readFileSync("./accountDetails.json", "utf8"));

        if (transferTarget === "quit") {
            currentLoc = "funds";
        } else {
            // Compare userArray:s id:s with transferTarget's ID and take true/false in checkBoolean
            const checkBoolean = userArray.some((x)=> x.id === transferTarget);

            if (checkBoolean) {
                const toCheckPassword = readline.question("To transfer funds, please enter your password " +
                "(or type 'quit' to go back):\n>> ");

                if (toCheckPassword === "quit") {
                    currentLoc = "funds";
                } else {
                    if (toCheckPassword === user.password) {
                        user.balance = Number(user.balance) - Number(transferAmount);
                        saveBalance(user.id, user.balance);

                        // Search userArray for transferTarget and add it with modified values to newAllUsers array.
                        const newAllUsers = userArray.map((x) =>
                            x.id === transferTarget ?
                                {...x, balance: Number(x.balance) + Number(transferAmount)} :
                                x,
                        );

                        // Saving newAllUsers back to accountDetails.json file
                        fs.writeFileSync("./accountDetails.json", JSON.stringify(newAllUsers), "utf8", (err) => {
                            if (err) {
                                console.log("Could not save userData to file!");
                            }
                        });

                        console.log("\nTransfer successful, your balance in your account is now: " +
                        Math.floor(user.balance* 100) / 100);
                    } else {
                        console.log("\nThe password is incorrect, please try again. (or 'quit' to go back to start)");
                        transferFunds();
                    }
                }
            } else {
                console.log("No user found by that ID. Try again.");
                transferFunds();
            }
        }
    } else {
        console.log("\nSorry but min. transfer amount is 1e and you can only use numbers (or 'quit' to go back).");
        transferFunds();
    }
}

function doesAccountExist() {
    const accToCheck = readline.question("Give ID number to see, if the account exists (or 'return' to go back)\n>> ");

    const userArray = JSON.parse(fs.readFileSync("./accountDetails.json", "utf8"));

    if (accToCheck === "return") {
        currentLoc = "account";
    } else {
        // Compare userArray:s id:s with accToCheck's ID and take true/false in checkBoolean
        const checkBoolean = userArray.some((x)=> x.id === accToCheck);

        if (checkBoolean) {
            console.log("User found by that ID. If you are xfering money, " +
            "contact user first to make sure it's correct ID");
        } else {
            console.log("No user found by that ID.");
        }
        doesAccountExist();
    }
}

function depositFunds() {
    console.log("\nDEPOSIT FUNDS");
    console.log("-----------------------------");
    console.log(user.name + ", (" + user.id + ")");
    console.log("Current balance: " + Math.floor(user.balance* 100) / 100);
    console.log("-----------------------------");
    const depositAmount = readline.question("How much money do you want to deposit (min. 1)?\n>> ");

    if (depositAmount === "quit") {
        currentLoc = "funds";
    } else if (depositAmount >= 1) {
        const toCheckPassword = readline.question("To deposit funds, please enter your password " +
        "(or type 'quit' to go back):\n>> ");
        if (toCheckPassword === "quit") {
            currentLoc = "funds";
        } else {
            if (toCheckPassword === user.password) {
                user.balance = Number(user.balance) + Number(depositAmount);

                saveBalance(user.id, user.balance);

                console.log("\nDeposit successful, your balance in your account is now: " +
                Math.floor(user.balance* 100) / 100);
            } else {
                console.log("\nThe password is incorrect, please try again. (or 'quit' to go back to start)");
                depositFunds();
            }
        }
    } else {
        console.log("\nSorry but min. deposit amount is 1e and you can only use numbers(or 'quit' to go back).");
        depositFunds();
    }
}

function withdrawFunds() {
    console.log("\nWITHDRAW FUNDS");
    console.log("-----------------------------");
    console.log(user.name + ", (" + user.id + ")");
    console.log("Current balance: " + Math.floor(user.balance* 100) / 100);
    console.log("-----------------------------");

    const withdrawAmount = (readline.question("How much money do you want to withdraw?\n>> "));

    if (withdrawAmount === "quit") {
        currentLoc = "funds";
    } else if (withdrawAmount >= 1) {
        const toCheckPassword = readline.question("To withdraw funds, please enter your password " +
        "(or type 'quit' to go back):\n>> ");
        if (toCheckPassword === "quit") {
            currentLoc = "funds";
        } else {
            if (toCheckPassword === user.password) {
                const balanceCheck = user.balance - withdrawAmount;

                if (balanceCheck >= 0) {
                    user.balance = user.balance - withdrawAmount;

                    saveBalance(user.id, user.balance);

                    console.log("\nWithdraw successful, your balance in your account is now: " +
                    Math.floor(user.balance* 100) / 100);
                } else if (balanceCheck < 0) {
                    console.log("Unfortunately you don't have enough balance for that. Try with smaller amount.");
                    withdrawFunds();
                } else {
                    console.log("Something went wrong, try again");
                    withdrawFunds();
                }
            } else {
                console.log("\nThe password is incorrect, please try again. (or 'quit' to go back to start)");
                withdrawFunds();
            }
        }
    } else {
        console.log("\nSorry but min. withdraw amount is 1e and you can only use numbers (or 'quit' to go back).");
        withdrawFunds();
    }
}

function saveBalance(userID, userBalance) {
    // Read data from accountDetails, add it to allUsers
    allUsers = JSON.parse(fs.readFileSync("./accountDetails.json", "utf8"));

    const newAllUsers = allUsers.map((x) =>
        x.id === userID ?
            {...x, balance: userBalance} :
            x,
    );

    // Saving newAllUsers back to accountDetails.json file
    fs.writeFileSync("./accountDetails.json", JSON.stringify(newAllUsers), "utf8", (err) => {
        if (err) {
            console.log("Could not save userData to file!");
        }
    });
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
        // set currentLock to menu, returning back to account menu
        currentLoc = "account";
    }
}

function modifyAccount() {
    console.log("\nMODIFY ACCOUNT");
    console.log("-----------------------------");
    console.log(user.name + ", (" + user.id + ")");
    console.log("-----------------------------");

    input = readline.question("Do you want to modify a 'name' or 'password'? (or 'quit' to go back)\n>> ");
    if (input === "name") {
        input = readline.question("Ok, type in new name of at least 5 letters (or 'quit' to go back):\n>> ");

        // More checks if needed, only letters, firstname, lastname....
        if (input.length < 5) {
            console.log("Name must contain at least 5 letters. Try again.");
            modifyAccount();
        } else if (input === "quit") {
            modifyAccount();
        } else {
            const newName = input;

            console.log("Current name: " + user.name + " -> New name: " + newName + ".");

            input = readline.question("To proceed with change, type in your "+
            "current password (or 'quit' to go back):\n>> ");

            if (input === user.password) {
                user.name = newName;

                // Read data from accountDetails, add it to allUsers
                allUsers = JSON.parse(fs.readFileSync("./accountDetails.json", "utf8"));

                const newAllUsers = allUsers.map((x) =>
                    x.id === user.id ?
                        {...x, name: user.name} :
                        x,
                );
                // Saving newAllUsers back to accountDetails.json file
                fs.writeFileSync("./accountDetails.json", JSON.stringify(newAllUsers), "utf8", (err) => {
                    if (err) {
                        console.log("Could not save userData to file!");
                    }
                });

                console.log("Name changed. Hello " + user.name + "!");
            } else if (input === "quit") {
                modifyAccount();
            } else {
                console.log("Wrong password, try again.");
                modifyAccount();
            }
        }
    } else if (input === "password") {
        input = readline.question("Ok, type in new password (or 'quit' to go back):\n>> ");

        // More checks if needed, letters, numbers, special marks....
        if (input === "quit") {
            modifyAccount();
        } else if (input.length < 5) {
            console.log("\nNew password must contain at least 5 letters. Try again.");
            modifyAccount();
        } else {
            const newPassword = input;
            input = readline.question("To proceed with change, type in your "+
            "old password (or 'quit' to go back):\n>> ");
            if (input === user.password) {
                user.password = newPassword;

                // Read data from accountDetails, add it to allUsers
                allUsers = JSON.parse(fs.readFileSync("./accountDetails.json", "utf8"));

                const newAllUsers = allUsers.map((x) =>
                    x.id === user.id ?
                        {...x, password: user.password} :
                        x,
                );
                // Saving newAllUsers back to accountDetails.json file
                fs.writeFileSync("./accountDetails.json", JSON.stringify(newAllUsers), "utf8", (err) => {
                    if (err) {
                        console.log("Could not save userData to file!");
                    }
                });

                console.log("Password changed.");
            }
        }
    } else if (input === "quit") {
        currentLoc = "account";
    } else {
        currentLoc = "account";
    }
}
