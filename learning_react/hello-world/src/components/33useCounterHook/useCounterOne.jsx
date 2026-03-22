import React, {useState} from "react";
import {useCounter} from './useCounter'

export const UseCounterHookOne = () => {
    const [count, increment, decrement, reset] = useCounter();

    return(
        <div>
            <p>Count - {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}