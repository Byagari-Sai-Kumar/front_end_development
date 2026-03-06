type GreetOneProps = {
    name: string
    city: string
}

export const GreetOne = ({name,city}: GreetOneProps) => {
    return(
        <div>
            <p>hello I'm {name} and I'm from {city}</p>
        </div>
    )
}