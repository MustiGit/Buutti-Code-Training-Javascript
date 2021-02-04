import React, { useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";


const Products = (props) => {

    let history = useHistory();

    useEffect(() => {
        // For this fake purpose, if productArray is empty, get data from Axios
        if (props.productArray.length === 0) {

            async function getData() {
                try {
                    const response = await Axios.get(`https://fakestoreapi.com/products/`);

                    // The !Array.isArray(response.data) method determines whether response.data is NOT an array.
                    if (!Array.isArray(response.data)) {
                        // If it's not an array, make it array
                        response.data = [response.data];
                    }

                    // let arrayHolder = response.data;
                    props.setProductArray(response.data);
                } catch (err) {
                    console.log(err);
                }
            }

            getData();
        } else {
            // Nothing
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const viewProduct = (product, i) => {
        // Set chosen ID as product.id
        props.setChosenID(product.id);

        // Change current view to details page
        history.push("/details");
    }

    const renderData = () => {
        // Get state of chosenCategory and filter product categories by it
        const filteredArr = props.productArray.filter(product => props.chosenCategory !== "all categories" ? product.category === props.chosenCategory : product.category);

        return filteredArr.map((product, i) => {
            return (
                <div
                    className="grid-item" key={product.id}
                    onClick={() => viewProduct(product, i)}
                >
                    <img src={product.image} alt="img"></img>
                    <div>{product.title}</div>
                    <div className="priceTag"> {product.price} EUR</div>
                </div>
            );
        });
    };

    return (
        <div id="grid-container">
            {renderData()}
        </div>
    )
}

export default Products;