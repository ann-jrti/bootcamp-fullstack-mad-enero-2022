import './style.css'

function InputSon({onChangeText = () => {}}) {
    return(
        <input onChange={onChangeText} type="text"></input>
    )
}

export default InputSon;