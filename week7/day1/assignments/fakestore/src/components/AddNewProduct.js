import { useHistory } from "react-router-dom";

function AddNewProduct() {

    let history = useHistory();

    const handleClick = () => {
        history.push("/"); 
    };

     return (
            <div className="addNewProduct">
                <div>About!</div>
                <button onClick={handleClick}>Go Home!</button>
            </div>
       )
     }

 export default AddNewProduct;