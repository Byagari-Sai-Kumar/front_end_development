import React from "react";

export const CounterTwo = (props) => {
    const {count, incrementCount} = props;
    return(
        <button onClick={incrementCount}>Clicked {count} times</button>
    )
}