import React, {useState} from "react";

function Buttons() {

let [number, setNumber] = useState(0);

     return (
         <div>
         <button onClick={() => setNumber(number + 1)}>+</button>
         <button onClick={() => setNumber(number - 1)}>-</button>
         <p>{number}</p>
         </div>
       )
     }

 export default Buttons;
