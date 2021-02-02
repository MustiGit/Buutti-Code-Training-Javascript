import { Link } from "react-router-dom"


function HeaderDropdown() {

const makeChoise = () => {
    // Get choise, setChoise
}

    return (

        <div id="header">
            <div>MustGet Shopping</div>

            <div className="dropdown">
                <nav>
                    <button className="dropbtn" onClick={makeChoise()}>MENU</button>
                    <div className="dropdown-content" id="myDropdown">
                        <Link to="/" className="link">Home</Link>
                        <Link to="/details" className="link">Details</Link>
                        <Link to="/products" className="link">Products</Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default HeaderDropdown;