import React, {useState, useEffect} from "react";
import Axios from "axios";

function Task1() {

const [productArray, setProductArray] = useState({});
const [index, setIndex] = useState(1);

useEffect(() => { // leave callback function as synchronous
    async function getData() { // declare async function inside callback
        const response= await Axios.get(`https://fakestoreapi.com/products/${index}`);
        setProductArray(response.data);        
    }
        getData(); // call the async function inside synchronous callback 
    }, [index]); // set the second argument as [] to avoid loop from state change

     return (
        <div id="container">

            <div id="pageTop">
                <h1>MustGet API Render!</h1>
            </div>

            <div id="pageMiddle">
            <h1>{productArray.title}</h1>;
            <div>Price: {productArray.price}</div>
            <div>Category: {productArray.category}</div>
            <div>Desc: {productArray.description}</div>
            <img src={productArray.image} alt="img"></img>

            </div>

            <div id="pageBottom">
                <button className = "button" onClick={() => setIndex(index - 1)}>Previous</button>
                <button className = "button" onClick={() => setIndex(index + 1)}>Next</button>
            </div>
                
        </div>
       )
     }

 export default Task1;