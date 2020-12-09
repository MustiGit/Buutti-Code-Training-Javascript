/* Create a ATM program to check your balance. Create variables balance,
isActive, checkBalance. Write conditional statement that implements the
flowchart below.

Change the values of balance, checkBalance, and isActive to test your code! */

const balance = 500;
const isActive = true;
const checkBalance = true;

if (!checkBalance) {
    console.log("Have a nice day!");
} else if (checkBalance && isActive && balance > 0) {
    console.log("Your balance: " + balance);
} else if (checkBalance && !isActive) {
    console.log("Your account is not active");
} else if (checkBalance && isActive && balance === 0) {
    console.log("Your account is empty");
} else if (checkBalance && isActive && balance < 0) {
    console.log("Your balance is negative");
}
