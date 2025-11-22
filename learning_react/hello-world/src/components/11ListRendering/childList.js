import React from "react";

export const ChildList = (props) => {
    //keys are not accessible in the child component.
    //console.log(props.key) gives us an error
    const {id,name,age,skills} = props.personDetails;
    return(
        <p id={id}>Hello there! I'm {name}, and i am {age} years old and good at {skills}</p>
    )
}