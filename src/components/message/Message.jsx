function Message(props) {
    return (
        <div>
            <h1>{props.greetingText}</h1>
            <h2>{props.summary}</h2>
        </div>
    );
}

export default Message;