type personInfo = {
    name : {
        firstName: string
        lastName: string
    }
}

export const Person = (props: personInfo) => {
    return(
        <p>Hello {props.name.firstName} {props.name.lastName}</p>
    )
}