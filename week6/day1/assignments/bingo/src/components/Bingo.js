import React, {useState} from "react";

function Bingo() {

const [originalArray, setOriginalArray] = useState([]);
const [renderArray, setRenderArray] = useState([]);

const addNumber = () => {

    let number = 0;

    // Roll new random number between 1-75, accept only new unique number
    do {
        number = Math.floor((Math.random() * 75) + 1);
    }
    while ((renderArray.includes(number)) || (number === 0));

    // Add new number in both, originalArray and renderArray
    setOriginalArray([...originalArray, number]);
    setRenderArray([...renderArray, number]);
}

const reorderNumberArray = () => {
        // Copy original array into arrayHolder
        let arrayHolder = [...originalArray];

        // Sort arrayHolder in asecnding order
        arrayHolder.sort((a, b) => a - b);

        // Set sorted contents of arrayHolder into renderArray
        setRenderArray(arrayHolder);
}

const originalNumberArray = () => {
        // Set contents of originalArray in renderArray
        setRenderArray([...originalArray]);
}

const renderNumbers = () => {
    // Map through renderArray and make new div with number inside for every item of array
   return renderArray.map((number) => {
    return (
        <div className="numbers" key={number}>
            {number}
        </div>
    );
});
}

const resetArrays = () => {
    // Reset both arrays
    setOriginalArray([]);
    setRenderArray([]);
}

     return (
        <div id="container">

            <div id="pageTop">
                <h1>MustGet BINGO!</h1>
            </div>

            <div id="pageMiddle">
                {renderNumbers()}
            </div>

            <div id="pageBottom">
                <button className = "button" onClick={addNumber}>New number</button>
                <button className = "button" onClick={resetArrays}>Reset</button>
                <button className = "button" onClick={reorderNumberArray}>Ascending order</button>
                <button className = "button" onClick={originalNumberArray}>Original order</button>
            </div>
                
        </div>
       )
     }

 export default Bingo;