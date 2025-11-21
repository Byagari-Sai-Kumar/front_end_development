import React from "react";

export const ChildList = (props) => {
    const {id,name,age,skills} = props.personDetails;
    return(
        <p id={id}>Hello there! I'm {name}, and i am {age} years old and good at {skills}</p>
    )
}