import React, {useState} from "react";

function ChangeParagraph() {
    let [text, updateText] = useState('First text')
    const handleChange = e => {
        console.log(e.target.value)
        updateText(e.target.value)
    }

   return(
       <React.Fragment>
        <input onChange={handleChange} name="inputText"></input>
        <p className="text-p">{text}</p>
       </React.Fragment>
   )
}

export default ChangeParagraph;