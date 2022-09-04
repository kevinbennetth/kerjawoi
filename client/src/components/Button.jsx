
const Button = (props) => { 
    const text = (props.text===undefined) ? "Button" : String(props.text);

    return (
        <button className={props.className}>
            <p>{text}</p>
        </button>
    );
}

export default Button;