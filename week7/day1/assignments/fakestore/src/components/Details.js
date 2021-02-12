/* eslint-disable react/prop-types */
import {useHistory} from "react-router-dom";
import React, {useState} from "react";
import Axios from "axios";

function Details(props) {
    const history = useHistory();

    // Set modifystatus to track toggle for modify button
    const [modifyStatus, setModifyStatus] = useState(false);

    // Set state for error message
    const [errorMessage, setErrorMessage] = useState("");

    // Set states for form input fields
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    // Set default state for modify button's text
    const [modifyBTNtext, setModifyBTNtext] = useState("MODIFY");

    // Get index of chosen item (item that user wants to see details of)
    const index = props.productArray.findIndex((product) => product.id === props.chosenID);

    const goBack = () => {
    // Change view back to products
        history.push("/");
    };

    const modifyBTN = () => {
        if (modifyBTNtext === "MODIFY") {
            setModifyBTNtext("MODIFY >");
            setModifyStatus(true);
        } else {
            setModifyBTNtext("MODIFY");
            setModifyStatus(false);
        }
    };

    const handleRemove = (e) => {
    // DELETE item

        async function remove() {
            try {
                const response = await Axios.delete("https://fakestoreapi.com/products/" + index);
                console.log(response);
            } catch (err) {
                console.log(err);
                setErrorMessage("Something went wrong with remove");
            }
        }
        remove();

        // MODIFYING PRODUCT IN THIS FUNCTION IS JUST FOR LOCAL UPDATE (Fakestore) ***

        // For fake purposes, make new product array for local update
        const products = [...props.productArray];

        // Remove index (chosenID) from array
        products.splice(index, 1);

        // Clear chosenID and modifiedBody
        props.setChosenID("");

        // Update productArray with new data
        props.setProductArray(products);
        // LOCAL UPDATE DONE ***

        // Change page back to products
        history.push("/");
    };

    const handleUpdate = () => {
    // If none of the fields have some input for update, do nothing
        if (!(title) && !(price) && !(image) && !(category) && !(description) && !(image)) {
            // Do nothing
        } else {
            // PUT ITEM

            /* Set modifiedBody with new values that are changed (not left empty).
            Causes call for useEffect's Axios put request
            parentNode is reading value of input fields. If there's any input,
            it makes change. If not, keep current value. */
            const modifiedBody = {
                title: title ? title : props.productArray[index].title,
                price: price ? Number(price) : props.productArray[index].price,
                category: category ? category : props.productArray[index].category,
                description: description ? description : props.productArray[index].description,
                image: image ? image : props.productArray[index].image,
            };

            // PUT request to Axios to update modified data
            async function put() {
                try {
                    const response = await Axios.put("https://fakestoreapi.com/products/" + index, modifiedBody);
                    console.log(response);
                } catch (err) {
                    console.log(err);
                    setErrorMessage("Something went wrong with update");
                }
            }
            put();

            // REST OF THIS FUNCTION IS JUST FOR LOCAL UPDATE

            // For fake purposes, make new product array for local update
            const products = [...props.productArray];

            // Make new product with updated info
            const product = {
                id: props.productArray[index].id,
                title: title ? title : props.productArray[index].title,
                price: price ? Number(price) : props.productArray[index].price,
                category: category ? category : props.productArray[index].category,
                description: description ? description : props.productArray[index].description,
                image: image ? image : props.productArray[index].image,
            };

            // Modify array's chosen (index) item with new product
            products[index] = product;

            // Update productArray with new data
            props.setProductArray(products);

            // Reset input fields
            handleReset();
        }
    };

    const handleReset = () => {
    // Clear input fields
        setTitle("");
        setImage("");
        setPrice("");
        setDescription("");
        setCategory("");
    };

    return (
        <div id="details">

            <div id="detailsView">
                <img src={props.productArray[index].image} alt="img"></img>
                <div>All categories/{props.productArray[index].category}/</div>
                <div>{props.productArray[index].title}</div>
                <div className="priceTag">
                    {props.productArray[index].price} EUR
                </div>
            </div>
            <div id="description" >
                <div>
                    {props.productArray[index].description}
                </div>
                <button type="button" onClick={goBack}>Go back</button>
                <button type="button" onClick={modifyBTN}>{modifyBTNtext}</button>
            </div>

            <form id="modifyForm" style={modifyStatus ? {display: "flex"} : {display: "none"}}>
                Image:
                <input id="modifyIMG" type="text" onChange={(e) => setImage(e.target.value)}
                    value={image} placeholder="Please enter the IMG url here..." />
                    Category:
                <input id="modifyCategory" type="text" onChange={(e) => setCategory(e.target.value)}
                    value={category} placeholder="Please enter the category here..." />
                    Title:
                <input id="modifyTitle" type="text" onChange={(e) => setTitle(e.target.value)}
                    value={title} placeholder="Please enter the title here..." />
                    Price:
                <input id="modifyPrice" type="text" onChange={(e) => setPrice(e.target.value)}
                    value={price} placeholder="Please enter the price here..." />
                    Description:
                <textarea rows="4" cols="50" id="modifyDescription" form="modifyForm"
                    onChange={(e) => setDescription(e.target.value)} value={description}
                    placeholder="Please enter the description here..."></textarea>
                <div>{errorMessage}</div>
                <div id="modifyButtonsWrapper">
                    <button type="button" onClick={handleUpdate}>UPDATE</button>
                    <button type="reset" onClick={handleReset}>RESET</button>
                    <button type="button" onClick={handleRemove}>REMOVE PRODUCT</button>
                </div>
            </form>


        </div>

    );
}

export default Details;
