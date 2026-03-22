import React from "react";

export const HoverTwo = (props) => {
    const {count,incrementCount} = props;
    return(
        <p onMouseOver={incrementCount}>Hovered {count} times</p>
    )
}