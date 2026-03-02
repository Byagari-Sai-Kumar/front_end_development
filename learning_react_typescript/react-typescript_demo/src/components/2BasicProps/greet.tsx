type GreetProps = {
    name: string
    messageCount: number
    isLoggedIn: boolean
}

export const GreetBasicProps = (props: GreetProps) => {
    return(
        <div>
            <h2>Hello {props.name} Welcome to React Typescript!!</h2>
            <p>No of messages received {props.messageCount}</p>
            {
                props.isLoggedIn ? <p>Hello Admin</p> : <p>Hello Guest</p>
            }
        </div>
    )
}