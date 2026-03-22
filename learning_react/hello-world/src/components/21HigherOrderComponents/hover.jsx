import React from "react";
import withCounter from "./withCounter";

const HoverComponent = (props) => {
    const {count,incrementCount, name} = props;
    return(
        <p onMouseOver={incrementCount}>{name} Hovered {count} times</p>
    )
}

export default withCounter(HoverComponent,10)