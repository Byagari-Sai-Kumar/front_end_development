import React, {useContext} from "react";
import {CounterContext} from './useReducerFour';

export const UseReducerSeven = () => {
    const dipatchMethod = useContext(CounterContext);

    return(
        <>
            <button onClick={() => dipatchMethod('increment')}>Increment</button>
            <button onClick={() => dipatchMethod('decrement')}>Decrement</button>
            <button onClick={() => dipatchMethod('reset')}>Reset</button>
        </>
    )
}