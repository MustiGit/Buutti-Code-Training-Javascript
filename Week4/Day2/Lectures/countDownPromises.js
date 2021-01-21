function timer(count) {
    console.log(count);

    return new Promise((resolve) => { // return a Promise
        const counter = setInterval(() => {
            count = count - 1;
            if (count < 1) {
                console.log("GO!");
                clearInterval(counter);
                resolve(); // it is resolved when the count finishes
                return;
            }
            console.log(count);
        }, 1000);
    });
}

// Count down from 3 shout "GO!" at zero
timer(3);
