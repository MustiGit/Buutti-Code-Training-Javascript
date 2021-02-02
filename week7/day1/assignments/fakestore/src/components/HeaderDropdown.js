import React, { useState } from "react";

function HeaderDropdown() {

    const [viewDropdown, setViewDropdown] = useState(false);

    const showCategories = () => {
        viewDropdown ? setViewDropdown(false) : setViewDropdown(true);
    }

    return (

        <div id="header">
            <div>MustGet Shopping</div>

            <div className="dropdown">
                <button onClick={() => showCategories()} className="dropbtn">CATEGORIES</button>

                <div id="myDropdown" className="dropdown-content" style={ viewDropdown ? {display: "flex" }:{display: "none"}}>
                <button className="button menuBTN"> Menu item 1 </button>
                 <button className="button menuBTN"> Menu item 2 </button>
                  <button className="button menuBTN"> Menu item 3 </button>
                </div>

            </div>
        </div>
    )
}

export default HeaderDropdown;

