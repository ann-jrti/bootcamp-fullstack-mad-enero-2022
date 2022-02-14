import React, {useState} from "react";

function GreenButton() {
    let [buttonColor, updateButtonColor] = useState(() => {return 'white'})
    const handleClick = e => {updateButtonColor('green')}
    
    return <button onClick={handleClick} style={{ backgroundColor: buttonColor }} className="green-button">Click me!</button>
}

export default GreenButton;