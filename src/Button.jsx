import "./Button.css"

function Button({ clickFunc }) {
    return (
        <button className="button" onClick={clickFunc} >Click me</button>
    )
}

export default Button;