type GreetProps = {
    name: string,
    message: number
}

export const Greet = (props: GreetProps) => {
    return(
        <div>
            <h2>Welcome {props.name}! You have {props.message} unread messages.</h2>
        </div>
    )
}