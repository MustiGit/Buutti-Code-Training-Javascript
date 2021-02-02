import { useHistory } from "react-router-dom";

function About() {

    let history = useHistory();

    const handleClick = () => {
        history.push("/"); 
    };

     return (
            <div className="about">
                <div>About!</div>
                <button onClick={handleClick}>Go Home!</button>
            </div>
       )
     }

 export default About;