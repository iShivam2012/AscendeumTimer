const Button = (props) => {

    return (
        <div>
            <input type="button" value = {props.name} onClick = {props.onClickHandler} />
        </div>
    )

}

export default Button;