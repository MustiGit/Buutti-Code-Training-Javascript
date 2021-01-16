/* eslint-disable no-unused-vars */
// export {inputChecker, calculateResult};

function inputChecker(input, currentCalculation) {
    // Check last letter from currentCalculation as lastInput
    const lastInput = currentCalculation.slice(currentCalculation.length - 1);

    // Create regexp pattern with + - * / signs (operators)
    const reg = /[*+-\/]$/g;

    // Create regexp2 pattern with + - * / signs (operators)
    const reg2 = /[.*+-\/]$/g;

    // Set up newCalculation as empty string for further modifications
    let newCalculation = "";

    // Test if new input includes + - * or /
    if (reg.test(input)) {
        // Test if previous input (lastInput) includes + - * / or . (duplicate operator or decimal)
        if (reg2.test(lastInput)) {
            // If last two inputs were operators/decimals, cut the old one and replace with new input
            const cutCalculation = currentCalculation.slice(0, -1);

            newCalculation = cutCalculation + input;

            // Update input into calculator screen
            document.getElementById("calcScreen").innerHTML = newCalculation;

        // Else (Two last inputs were NOT operators/decimals)
        } else {
            newCalculation = currentCalculation + input;

            // Check if new input was decimal
            if (input === ".") {
                // Check if last value in calculation already has a decimal. If false, update input into calc screen
                doubleDecimalChecker(currentCalculation) ?
                    null : document.getElementById("calcScreen").innerHTML = newCalculation;
            } else {
                // Else if new input wasn't decimal, update input into calc screen
                document.getElementById("calcScreen").innerHTML = newCalculation;
            }
        }
    // Else if input wasnt operator or decimal
    } else {
        newCalculation = currentCalculation + input;

        // If currentCalculation is default 0, replace it with new input in newCalculation
        currentCalculation === "0" ? newCalculation = input : null;

        // Update input into calc screen
        document.getElementById("calcScreen").innerHTML = newCalculation;
    }
}

function doubleDecimalChecker(currentCalculation) {
    // Create regexp pattern with + - * / signs (operators)
    const reg = /[-+*\/]/;

    // Use pattern + .split to pick every number between operators into array ex. ["46.6", "5"]
    const arr = currentCalculation.split(reg);

    // Pick last item from array into lastOfArr
    const lastOfArr = (arr[arr.length - 1]);

    // Create regexp pattern with . (decimal)
    const reg2 = /\./;

    // Test if last item from array already has . on it return true/false
    return reg2.test(lastOfArr);
}

function calculateResult(currentCalculation) {
    // Check last letter from currentCalculation as lastInput
    const lastInput = currentCalculation.slice(currentCalculation.length - 1);

    // Create regexp pattern with + - * / signs (operators)
    const reg = /[.*+-\/]$/g;

    // Test, if lastInput was operator or decimal. If so, cut it off before calculating result
    if (reg.test(lastInput)) {
        currentCalculation = currentCalculation.slice(0, -1);
    }

    // Do calculation from string with evaluate (eval) and display result to calcScreen element
    document.getElementById("calcScreen").innerHTML = eval(currentCalculation);
}
