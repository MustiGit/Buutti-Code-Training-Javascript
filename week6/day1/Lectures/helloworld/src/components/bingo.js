import React, {useState} from "react";

function Bingo() {

let [numberArray, setNumberArray] = useState([]);

const renderNumbers = () => {
    return numberArray.map((number, i) => {
        return (
            <div key={number + i}>
                <p>{number}</p>
            </div>
        );

    });
}

     return (
         <div>
        <p>{renderNumbers()}</p>
        <button onClick={() => setNumberArray((numberArray => [...numberArray, Math.floor((Math.random() * 9) + 1)]))}>New number</button>
        <button onClick={() => setNumberArray([])}>Reset</button>

         </div>
       )
     }

 export default Bingo;

 /*
<button onClick={() => setNumberArray((numberArray => [...numberArray, randomNum()]))}>+</button>



const [nameInput, setNameInput] = useState("");

const renderPersons = () => {
    return persons.map((person) => {
        return (
            <div>
                <p>{person.name} was born in the year {person.year}</p> />
                <input onChange={(e) => setNameInput(e.currentTarget.value)} />
            </div>
        );
    });
}

 return (
     <div>
        {renderPersons()}
    </div>
 )

 */