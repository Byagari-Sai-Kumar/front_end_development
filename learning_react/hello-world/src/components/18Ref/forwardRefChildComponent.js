import React from "react";

//React.forwardRef() accepts a callback with props and ref as parameter
//this can be used in case of functional components 

export const ForwardRefChildComponent = React.forwardRef((props, ref) => {
    return(
        <input type="text" ref={ref}/>
    )
})