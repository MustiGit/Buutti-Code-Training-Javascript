import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Axios from "axios";

function Details(props) {

    let history = useHistory();

    const [modifyStatus, setModifyStatus] = useState(false);
    const [modifiedBody, setModifiedBody] = useState({});

    const index = props.productArray.findIndex(product => product.id === props.chosenID);

    useEffect(() => {

        if (!Object.keys(modifiedBody).length === 0) {
        async function put() {
            const response = await Axios.put("https://fakestoreapi.com/products/" + index, modifiedBody);
            console.log(response);
        }
        put();
    } else {
        // Nothing
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modifiedBody]);

    const goBack = () => {
        // Change view back to products
        history.push("/");
    };

    const modifyBTN = (e) => {
        if (e.target.innerHTML === "MODIFY") {
            e.target.innerHTML = "MODIFY >";
            setModifyStatus(true);
        } else {
            e.target.innerHTML = "MODIFY";
            setModifyStatus(false);
        }

    }

    const handleRemove = (e) => {
        // DELETE item

        async function remove() {
            const response = await Axios.delete("https://fakestoreapi.com/products/" + index);
            console.log(response);
        }
        remove();

        // MODIFYING PRODUCT IN THIS FUNCTION IS JUST FOR LOCAL UPDATE (Fakestore) ***

        // For fake purposes, make new product array for local update
        let products = [...props.productArray];

        // Remove index (chosenID) from array
        products.splice(index, 1);

        // Clear chosenID and modifiedBody
        props.setChosenID("");
        setModifiedBody({});

        // Update productArray with new data
        props.setProductArray(products);
        // LOCAL UPDATE DONE ***

        // Change page back to products
        history.push("/");
    }

    const handleUpdate = (e) => {
        // PUT ITEM

        /* Set modifiedBody with new values that are changed (not left empty). Causes call for useEffect's Axios put request
        parentNode is reading value of input fields. If there's any input, it makes change. If not, keep current value. */
        setModifiedBody(
            {
                title: e.target.parentNode.parentNode[2].value ? e.target.parentNode.parentNode[2].value : props.productArray[index].title,
                price: e.target.parentNode.parentNode[3].value ? Number(e.target.parentNode.parentNode[3].value) : props.productArray[index].price,
                category: e.target.parentNode.parentNode[1].value ? e.target.parentNode.parentNode[1].value : props.productArray[index].category,
                description: e.target.parentNode.parentNode[4].value ? e.target.parentNode.parentNode[4].value : props.productArray[index].description,
                image: e.target.parentNode.parentNode[0].value ? e.target.parentNode.parentNode[0].value : props.productArray[index].image
            }
        )
        
        // REST OF THIS FUNCTION IS JUST FOR LOCAL UPDATE

        // For fake purposes, make new product array for local update
        let products = [...props.productArray];

        // Make new product with updated info
        let product = {
                id: props.productArray[index].id,
                title: e.target.parentNode.parentNode[2].value ? e.target.parentNode.parentNode[2].value : props.productArray[index].title,
                price: e.target.parentNode.parentNode[3].value ? Number(e.target.parentNode.parentNode[3].value) : props.productArray[index].price,
                category: e.target.parentNode.parentNode[1].value ? e.target.parentNode.parentNode[1].value : props.productArray[index].category,
                description: e.target.parentNode.parentNode[4].value ? e.target.parentNode.parentNode[4].value : props.productArray[index].description,
                image: e.target.parentNode.parentNode[0].value ? e.target.parentNode.parentNode[0].value : props.productArray[index].image
        }

        // Modify array's chosen (index) item with new product
        products[index] = product;

        // Update productArray with new data
        props.setProductArray(products);
        
    }

    return (
        <div id="details">

            <div id="detailsView">
                <img src={props.productArray[index].image} alt="img"></img>
                <div>{props.productArray[index].title}</div>
                <div className="priceTag">
                    {props.productArray[index].price} EUR
                </div>

            </div>
            <div id="description">
                <div>
                    {props.productArray[index].description}
                </div>
                <button type="button" onClick={goBack}>Go back</button>
                <button type="button" onClick={(e) => modifyBTN(e)}>MODIFY</button>
            </div>

            <form id="modifyForm" style={modifyStatus ? { display: "flex" } : { display: "none" }}>
                Image:
                    <input id="modifyIMG" type="text" placeholder="Please enter the IMG url here..." />
                    Category:
                    <input id="modifyCategory" type="text" placeholder="Please enter the category here..." />
                    Title:
                    <input id="modifyTitle" type="text" placeholder="Please enter the title here..." />
                    Price:
                    <input id="modifyPrice" type="text" placeholder="Please enter the price here..." />
                    Description:
                    <textarea rows="4" cols="50" id="modifyDescription" form="modifyForm" placeholder="Please enter the description here..."></textarea>

                <div id="modifyButtonsWrapper">
                    <button type="button" onClick={(e) => handleUpdate(e)}>UPDATE</button>
                    <button type="reset">RESET</button>
                    <button type="button" onClick={handleRemove}>REMOVE PRODUCT</button>
                </div>
            </form>


        </div>

    )
}
/*

style={card.turned ?
                                        {backgroundImage: `url(${card.url})`} : {backgroundImage: `url(${Backside})`}}
                                        */
export default Details;