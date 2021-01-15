// EventListener for submit button. Does all calculations and gives result
document.getElementById("submitBTN").addEventListener("click", function() {
    // Check if both gender radio buttons are unchecked
    if ((!document.getElementById("genderM").checked) && (!document.getElementById("genderF").checked)) {
        // If gender is unchecked, as user to check gender button
        document.getElementById("pageBottom").innerHTML = "Please choose your gender";
    } else {
        // If not, get all values from different fields and gender button
        const gender = document.querySelector("input[name=\"gender\"]:checked").value;
        const weight = Number(document.getElementById("weight").value);
        const time = Number(document.getElementById("time").value);
        const drinkSize = Number(document.getElementById("drinkSize").value);
        const volume = Number(document.getElementById("volume").value);
        const doses = Number(document.getElementById("doses").value);

        // Check if any of fields are empty, ask user to fill all fields
        if ((!weight) || (!time) || !drinkSize || (!volume) || (!doses)) {
            document.getElementById("pageBottom").innerHTML = "Fill all the fields and use only numbers!";
        } else {
            // Begin calculations by formula
            const litres = (drinkSize / 1000) * doses;
            const gramFactor = 8;
            const grams = litres * gramFactor * volume;
            const burning = weight / 10;
            const gramsLeft = grams - (burning * time);

            const genderFactorMale = 0.7;
            const genderFactorFemale = 0.6;

            // If gender = male, calculate with value of 0.7, else (if female), calculate with 0.6
            let result = (gender === "male") ?
                (gramsLeft / (weight * genderFactorMale)) : (gramsLeft / (weight * genderFactorFemale));

            // Round up result to 2 decimals
            result = result.toFixed(2);

            // If result is less than 0, result is string of "0.0" else keep it as it is
            result = (result < 0) ? result = "0.0" : result;

            // Show result in bottom section of page
            document.getElementById("pageBottom").innerHTML = `Your BAC is: ${result}`;
        }
    }
});

// EventListener for reset button. Clears all the fields and buttons
document.getElementById("resetBTN").addEventListener("click", function() {
    // Uncheck buttons
    document.getElementById("genderM").checked = false;
    document.getElementById("genderF").checked = false;

    // Clear all fields
    document.getElementById("weight").value = "";
    document.getElementById("time").value = "";
    document.getElementById("volume").value = "";
    document.getElementById("doses").value = "";

    // Set select value to default option
    document.getElementById("drinkSize").value = "40";

    // Set bottom of page to default, clearing previous result
    document.getElementById("pageBottom").innerHTML = "Your BAC is:";
});
