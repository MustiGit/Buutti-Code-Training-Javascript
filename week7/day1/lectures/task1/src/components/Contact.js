import { useHistory } from "react-router-dom";

function Contact() {
    let history = useHistory();

    const handleClick = () => {
        history.push("/");
    };

     return (
            <div className="contact">
                <div>Contact!</div>
                <button onClick={handleClick}>Go Home!</button>
            </div>
       )
     }

 export default Contact;