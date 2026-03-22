import React from "react";

const Text = (props) => {
    console.log(`Rendering Text - ${props.displayText}`);
    return(
        <p>{props.displayText}</p>
    )
}

export default React.memo(Text)