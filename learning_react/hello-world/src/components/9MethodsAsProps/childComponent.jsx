import React from "react";

export const ChildComponent = (props) => {
    return(
        //always use arrow functions when passing values from child to parent component
        <button onClick={() => props.greetHandler("child component")}>greet parent</button>
    )
}