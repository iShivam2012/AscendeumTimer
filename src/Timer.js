const Timer = (props) => {
    return (
        <div>
            <p>MIN</p>
            <p>{props.min}</p>
            <p>SEC</p>
            <p>{props.sec}</p>
        </div>
    )

}

export default Timer;