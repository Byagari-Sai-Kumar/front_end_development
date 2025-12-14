import React from "react";

const Title = () => {
    console.log('Rendering Title');
    return(
        <p>This is Callback Hook</p>
    )
}

export default React.memo(Title)