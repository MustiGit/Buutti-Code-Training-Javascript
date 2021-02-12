/* Create a program that generates 7 random numbers from 1 to 40.

Numbers must be unique. Return array of lottery numbers.

Extra: output each number with one second delay

Hint for extra: get to know setTimeout() */

const arr = [];

/**
 * Function is used for looping setTimeout
 */
function loop() {
    if (arr.length < 7) {
        const r = Math.floor(Math.random() * 40) + 1;
        setTimeout(loop, 1000);
        if (arr.indexOf(r) === -1) {
            arr.push(r);
            console.log(r);
            if (arr.length === 7) {
                console.log(arr);
            }
        }
    }
}

loop();

