type GreetProps = {
    name: string,
    messageCount?: number,
    isLoggedIn: boolean,
}

export const Greet = (props: GreetProps) => {
    /*  This line of code is using destructuring assignment
        in JavaScript to extract the messageCount property
        from the props object. If the messageCount property
        is not present in the props object, it will default
        to 0. 

        it's equivalent to this code:
        let messageCount;
        if (props.messageCount !== undefined) {
        messageCount = props.messageCount;
        } else {
        messageCount = 0;
        }

     */
    const {messageCount = 0} = props
    return(
        <div>
            <h2>
                {
                    props.isLoggedIn ? 
                    `Welcome ${props.name}! You have ${messageCount} unread messages.`
                    :
                    `Welcome Guest!`
                }
                
            </h2>
        </div>
    )
}