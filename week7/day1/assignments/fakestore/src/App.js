import './App.css';
import HeaderDropdown from './components/HeaderDropdown';
import Products from './components/Products';
import Details from './components/Details';
import AddNewProduct from './components/AddNewProduct';
import { Route } from "react-router-dom";
import React, { useState } from "react";

function App() {

  const [productArray, setProductArray] = useState([]);
  const [chosenCategory, setChosenCategory] = useState("");
  const [chosenID, setChosenID] = useState("");

  return (
    <div className="App">
      <div id="container">
        <HeaderDropdown />

        <Route path="/" exact>
          <Products
          setChosenCategory = {setChosenCategory}
          chosenCategory = {chosenCategory}

          setProductArray = {setProductArray}
          productArray = {productArray}

          setChosenID = {setChosenID}
          
          />
        </Route>

        <Route path="/details" exact>
          <Details
          chosenID = {chosenID}
          productArray = {productArray}
          setProductArray = {setProductArray}
          setChosenID = {setChosenID}
          />
        </Route>

        <Route path="/addNewProduct" exact>
          <AddNewProduct />
        </Route>
      </div>
    </div>
  );
}
/*

      <Route path="/" exact>
        <Dropdown />
        <Products />
      </Route>

      <Route path="/about" exact>
        <Dropdown />
        <About />
      </Route>

      <Route path="/contact" exact>
        <Dropdown />
        <Products />
      </Route>

*/
export default App;
