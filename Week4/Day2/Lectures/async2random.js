

const getValue = function() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({value: Math.random()});
        }, Math.random() * 1500);
    });
};

// Async way
async function f() {
    let result = await getValue();
    const valueOne = result.value;
    result = await getValue();
    const valueTwo = result.value;

    console.log(`Value 1 is ${valueOne} and value 2 is ${valueTwo}`);
}
console.log("With async+await: ");
f();
f();

// Promise.then way
let valueOneHere;
let valueTwoHere;
getValue()
    .then((ret) => {
        valueOneHere = ret.value;
        return getValue();
    }).then((ret) => {
        valueTwoHere = ret.value;
        console.log(`Value 1 is ${valueOneHere} and value 2 is ${valueTwoHere}`);
    });

