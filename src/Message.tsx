interface IUserMessage {
    name: string;
    message: string;
}

const Message = (props: IUserMessage): any => {
    return (
        <p>{ props.name } { props.message }</p>
    )
}

export default Message;