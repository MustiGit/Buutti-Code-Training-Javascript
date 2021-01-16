// import {inputChecker, calculateResult} from "./functions.js";

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
