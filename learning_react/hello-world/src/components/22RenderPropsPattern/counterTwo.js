import React from "react";

const CounterTwoComponent = (props) => {
    const {count,incrementCount} = props;
    return(
        <button onClick={incrementCount}>Clicked {count} times</button>
    )
}

export default CounterTwoComponent