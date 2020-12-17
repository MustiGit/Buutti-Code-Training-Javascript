/* Create a function (or multiple functions) that generates username and
password from given firstname and lastname.

Example: John Doe -> B20dojo, mjE(20
generateCredentials("John", "Doe")

Output: “username: username, password: password” */

/* - For testing purposes @command line
const input = process.argv[2].split(" ");
const firstName = input[0];
const lastName = input[1];

console.log(generateCredentials(firstName, lastName));
*/


console.log(generateCredentials("John", "Doe"));
/**
 * Function takes in first and last name as parameters and uses them to
 * randomly generate username and password for user
 *
 * Username: B + last 2 numbers from current year + 2 first letters
 * from both last name and first name in lower case
 *
 * Password:  1 random letter + first letter of first name in lowercase +
 *  last letter of last name in uppercase + random special character +
 * last 2 numbers from current year
 *
 * @param {string} firstName - Takes in first name
 * @param {string} lastName - Takes in last name
 * @return {any} Returns random-generated username + password
 */
function generateCredentials(firstName, lastName) {
    // Generate username
    const userName = "B" + (new Date().getFullYear() % 100) +
    firstName.substring(0, 2).toLowerCase() +
    lastName.substring(0, 2).toLowerCase();

    // Generate password
    const password = String.fromCharCode(97+Math.floor(Math.random() * 26)) +
    firstName.substring(0, 1).toLowerCase() +
    lastName.substring(lastName.length - 1, lastName.length).toUpperCase() +
    String.fromCharCode(Math.floor(Math.random() * (47 - 33) + 33)) +
    (new Date().getFullYear() % 100);

    return "Username: " + userName + ", Password: " + password;
}
