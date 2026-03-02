//here we define key data type
//here the keyword type is used when building applications
//interfaces used when building libraries.
type GreetProps = {
    name: string
}

//here we mention object structure
export const Greet = (props: GreetProps) => {
    return(
        <div>
            {/* here ts automatically suggests us the keys or props which are been sent to this component */}
            <h2>Hello {props.name} Welcome to React Typescript!!</h2>
        </div>
    )
}