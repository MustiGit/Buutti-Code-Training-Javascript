import React, {useState} from "react";

function ToDoApp() {

const [toDoArray, setToDoArray] = useState([]);
const [toDoInput, setToDoInput] = useState("");

const onChange = (event) => {
    // Update state on toDoInput
    setToDoInput(event.target.value);
  };

const addNewItem = (e) => {
    e.preventDefault();

    // Clear toDoInput
    setToDoInput("");

    // Make new array from toDoArray + new input
    const newToDo = [...toDoArray, {todo: toDoInput, done: false}];

    // Update contents to toDoArray
    setToDoArray(newToDo);
}

const removeItem = (i) => {
    // Add contents of toDoArray inside arrayHolder
    let arrayHolder = [...toDoArray];

    // Remove item from array by index parameter
    arrayHolder.splice(i, 1);

    // Update state of toDoArray by contents of arrayHolder
    setToDoArray(arrayHolder);
}

const toggleDone = (i) => {
    // Add contents of toDoArray inside arrayHolder
    let arrayHolder = [...toDoArray];

    // Toggle value to true/false
    toDoArray[i].done === false ? arrayHolder[i].done = true : arrayHolder[i].done = false

    // Update state of toDoArray by contents of arrayHolder
    setToDoArray(arrayHolder);
}

const renderItems = () => {
    // Map through toDoArray and make new div with index number inside for every item of array
   return toDoArray.map((item, i) => {
    return (
        <div className="items" key={item.todo + i} >

            <div className="toDo" style={!item.done ? {backgroundColor: '#9acecf'} : {backgroundColor: 'rgba(52, 52, 52, 0.8)', opacity: 0.2}}>
                {item.todo}
            </div>

            <div className="itemsColumn">
                <button className="button2" onClick={() => removeItem(i)}>X</button>
                <button className="button2" onClick={() => toggleDone(i)}>&#x2713;</button>
            </div>
            
        </div>
    );
});
}
     return (
        <div id="container">

            <div id="pageTop">
                <h1>MustGet ToDoApp</h1>
            </div>

            <div id="pageMiddle">
                {renderItems()}
            </div>

            <div id="pageBottom">
                <input id="inputField" value = {toDoInput} onChange={onChange} />
                <button className = "button" onClick={addNewItem}>Submit</button>
            </div>
                
        </div>
       )
     }

 export default ToDoApp;