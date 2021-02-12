const anotherFunction = function(arg, func) {
    setTimeout(() => {
        func();
    }, arg);
};

console.log("3");
anotherFunction(1000, () => {
    console.log("2");
    anotherFunction(1000, () => {
        console.log("1");
        anotherFunction(1000, () => {
            console.log("GO!");
        });
    });
});
