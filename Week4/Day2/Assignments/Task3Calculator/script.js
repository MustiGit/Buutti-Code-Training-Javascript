document.querySelectorAll(".button").forEach((item) => {
    item.addEventListener("click", () => {
        const currentCalculation = document.getElementById("calcScreen").innerHTML;
        const input = item.value;

        // If there's only zero on screen and input is zero, do nothing
        if ((input === "0") && (currentCalculation === "0")) {
        } else {
            const calcCommands = {
                "C": () => document.getElementById("calcScreen").innerHTML = "0",
                "=": () => calculateResult(currentCalculation),
                "default": () => inputChecker(input, currentCalculation),
            };
            // Call command function as requested
            calcCommands[input] ? calcCommands[input]() : calcCommands["default"]();
        }
    });
});

function inputChecker(input, currentCalculation) {
    // Check last letter from currentCalculation as lastInput
    const lastInput = currentCalculation.slice(currentCalculation.length - 1);

    // Create regexp pattern with + - * / signs (operators)
    const reg = /[*+-\/]$/g;

    // Create regexp pattern with + - * / . signs (operators + decimal)
    const reg2 = /[.*+-\/]$/g;

    // Set up newCalculation string to display in calcScreen after comparisons
    let newCalculation = "";

    // Test if new input includes + - * or /
    if (reg.test(input)) {
        // Test if previous input (lastInput) includes + - * / or . (duplicate operator or decimal)
        if (reg2.test(lastInput)) {
            // If last two inputs were operators/decimals, cut the old one and replace with new input
            const cutCalculation = currentCalculation.slice(0, -1);
            newCalculation = cutCalculation + input;
            document.getElementById("calcScreen").innerHTML = newCalculation;
        } else {
            newCalculation = currentCalculation + input;
            document.getElementById("calcScreen").innerHTML = newCalculation;
        }
    } else {
        newCalculation = currentCalculation + input;

        // If currentCalculation is default 0, replace it with new input in newCalculation
        currentCalculation === "0" ? (newCalculation = input) : null;

        document.getElementById("calcScreen").innerHTML = newCalculation;
    }
}

function calculateResult(currentCalculation) {
    // Do calculation from string with evaluate (eval) and display result to calcScreen element
    document.getElementById("calcScreen").innerHTML = eval(currentCalculation);
}
