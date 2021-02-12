/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import React, {useState} from "react";
import Axios from "axios";

function HeaderDropdown(props) {
    // Set state of viewDropdown, which affects in displaying of dropdown list
    const [viewDropdown, setViewDropdown] = useState(false);

    // Set state of viewAddNew, which affets in displaying add new product form
    const [viewAddNew, setViewAddNew] = useState(false);

    // Set state for error message
    const [errorMessage, setErrorMessage] = useState("");

    // Set default state for category BTN name. Changes when other category is selected
    const [categoryBTNname, setCategoryBTNname] = useState("All Categories");

    // Set states for form input fields
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const showCategories = () => {
        // Toggle category dropdown display on/off.
        viewDropdown ? setViewDropdown(false) : setViewDropdown(true);
    };

    const renderCategory = (e) => {
    // If user clicked add new product, hide dropdown list and show add new product form
        if (e.target.value === "add new product") {
            viewAddNew ? setViewAddNew(false) : setViewAddNew(true);
            viewDropdown ? setViewDropdown(false) : setViewDropdown(true);

            // Else change shown category to requested value
        } else {
            props.setChosenCategory(e.target.value);
            setCategoryBTNname(e.target.value);
        }
    };

    const renderDropDownButtons = () => {
    // Map through productArray and leave only names of categories in mappedArr
        const mappedArr = props.productArray.map((product) => {
            return product.category;
        });

        // Remove duplicates, leaving only unique names of categories
        let categories = [...new Set(mappedArr)];

        // Add "all categories" in front and "add new product" behind of array.
        categories = ["all categories", ...categories, "add new product"];

        // Map through modified categories and make unique clickable button from every categoryName
        return categories.map((categoryName, i) => {
            return (
                <button
                    className="button menuBTN"
                    key={categoryName + i}
                    onClick={(e) => {
                        renderCategory(e);
                    }}
                    value={categoryName}
                > {categoryName} </button>
            );
        });
    };

    const handleSave = () => {
    // POST

        // Require that all fields are filled, otherwise do nothing
        if (!(title) || !(price) || !(image) || !(category) || !(description) || !(image)) {
            // Do nothing
        } else {
            // Create new random ID
            const newID = Date.now() + ((Math.random() * 100000).toFixed());

            // Make new product with values from input fields and newID
            const newProduct =
            {
                id: newID,
                title: title,
                price: Number(price),
                category: category,
                description: description,
                image: image,
            };

            // Clear input fields
            setTitle("");
            setImage("");
            setPrice("");
            setDescription("");
            setCategory("");

            // AXIOS POST
            async function post() {
                try {
                    const response = await Axios.post("https://fakestoreapi.com/products/", newProduct);
                    console.log(response);
                    props.setProductArray([...props.productArray, response.data]);
                } catch (err) {
                    console.log(err);
                    setErrorMessage("Something went wrong with saving");
                }
            }
            post();
        }
    };

    const handleClose = () => {
        // Hide add new product div
        viewAddNew ? setViewAddNew(false) : setViewAddNew(true);
    };

    const handleReset = () => {
    // Clear input fields
        setTitle("");
        setImage("");
        setPrice("");
        setDescription("");
        setCategory("");
    };

    const renderOverView = () => {
        if ((image) && (category) && (price) && (title) && (description)) {
            return (
                <div id="addView">
                    {errorMessage}
                    <div>This product will be added:</div>
                    <img src={image} alt="img"></img>
                    <div>All Categories/{category}/</div>
                    <div>{title}</div>
                    <div className="priceTag">
                        {price} EUR
                        <div id="overViewDesc">"{description}"</div>
                    </div>
                </div>
            );
        } else {
            return (
                <div id="addView">
                    <div>Please fill all fields to see overview</div>
                </div>
            );
        }
    };
    return (

        <div id="header">
            <div>MustGet Shopping</div>

            <div className="dropdown">
                <button id="categoryBTN" onClick={() => showCategories()} className="dropbtn">{categoryBTNname}</button>

                <div id="myDropdown"
                    className="dropdown-content"
                    style={viewDropdown ? {display: "flex"} : {display: "none"}}>
                    {renderDropDownButtons()}
                </div>
                <div id="formContainer" style={viewAddNew ? {display: "flex"} : {display: "none"}}>
                    <form id="addNewProduct">
                        <div id="fieldsAndBTNs">
                            Image:
                            <input id="addIMG" type="text" onChange={(e) => setImage(e.target.value)}
                                value={image} placeholder="Please enter the IMG url here..." />
                           Category:
                            <input id="addCategory" type="text" onChange={(e) => setCategory(e.target.value)}
                                value={category} placeholder="Please enter the category here..." />
                           Title:
                            <input id="addTitle" type="text" onChange={(e) => setTitle(e.target.value)}
                                value={title} placeholder="Please enter the title here..." />
                           Price:
                            <input id="addPrice" type="text" onChange={(e) => setPrice(e.target.value)}
                                value={price} placeholder="Please enter the price here..." />
                           Description:
                            <textarea rows="4" cols="50" id="addDescription" form="addNewProduct"
                                onChange={(e) => setDescription(e.target.value)} value={description}
                                placeholder="Please enter the description here..."></textarea>

                            <div id="addButtonsWrapper">
                                <button type="button" onClick={handleSave}>SAVE</button>
                                <button type="reset" onClick={handleReset}>RESET</button>
                                <button type="button" onClick={handleClose}>CLOSE</button>
                            </div>
                        </div>
                        {renderOverView()}
                    </form>

                </div>
            </div>

        </div>
    );
}

export default HeaderDropdown;

