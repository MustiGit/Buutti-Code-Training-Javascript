anotherFunction(1000, () => {
    console.log("first");
    anotherFunction(2000, () => {
        console.log("second");
        anotherFunction(500, () => {
            console.log("third");
            anotherFunction(1500, () => {
                console.log("oh jesus...");
            });
        });
    });
});
