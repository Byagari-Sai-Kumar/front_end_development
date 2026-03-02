type peopleList = {
    people: {
        firstName: string
        lastName: string
    }[]
}

export const PersonList = (props: peopleList) => {
    return(
        <div>
            {props.people.map(eachPerson => <p>Hello {eachPerson.firstName} {eachPerson.lastName}</p>)}
        </div>
    )
}