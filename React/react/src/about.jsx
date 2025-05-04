
import { useState } from "react";
import Button from "./Button";

/**
 * About component.
 * This component is used to display information about the application or a specific topic.
 *
 * @component
 * @returns {JSX.Element} The rendered About component.
 */
const About = () => {
    
    //var UNUSED_COUNT = 0;
    //const state = useState(0);
    //const FIRST_ITEM = state[0];
    //const UNUSED_SECOND_ITEM = state[1];
    
    const [number,setNumber] = useState(33);
    
    const increaseCount = () => {
        setNumber(number + 1);
    };
    const decreaseCount = () => {
        setNumber(number - 1);
    };

   
    //useState()
    return (
        <div>
            <h2>{number.name}</h2>
            <button onClick={increaseCount}>+</button>
            <button onClick={decreaseCount}>-</button>
        </div>
    );
    }

export default About;