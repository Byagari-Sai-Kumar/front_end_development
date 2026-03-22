import React from "react";
import withCounter from "./withCounter";

const CounterComponent = (props) => {
    const {count,incrementCount, name} = props;
    return(
        <button onClick={incrementCount}>{name} Clicked {count} times</button>
    )
}

export default withCounter(CounterComponent,5)