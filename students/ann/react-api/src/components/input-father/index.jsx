import './style.css'
import InputSon from '../input-son';
import React, {useState} from 'react';

function InputFather() {
    let [value, updateValue] = useState('default value');

    const handleTextChange = e => {
        updateValue(e.target.value)
    }
    
    return(
        <React.Fragment>
            <h1>{value}</h1>
            <InputSon onChangeText={handleTextChange}></InputSon>
        </React.Fragment>
    )
}

export default InputFather;