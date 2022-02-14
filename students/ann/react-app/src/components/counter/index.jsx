import React, {useState} from "react";

function Counter() {
    let [counter, updateCounter] = useState(() => {return 0})

    const handleClickAdd = e => {
        updateCounter(prevCount => prevCount + 1)
    }

    const handleClickSubstract= e => {
        updateCounter(prevCount => prevCount - 1)
    }

    return( 
        <React.Fragment>
            <button onClick={handleClickAdd} className="add">+</button>
            <p className="counter">{counter}</p>
            <button onClick={handleClickSubstract} className="substract">-</button>
        </React.Fragment>
    )
}

export default Counter;