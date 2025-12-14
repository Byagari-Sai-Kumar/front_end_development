import React from "react";

const Button = ({increase,children}) => {
    console.log(`Rendering Button - ${children}`);
    return(
        <button onClick={increase}>{children}</button>
    )
}

export default React.memo(Button)