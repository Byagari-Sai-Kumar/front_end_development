import React,{useReducer} from "react";

const intialState = 0;
const reducer = (currentState,action) => {
    switch(action){
        case 'increment':
            return currentState + 1;
        case 'decrement':
            return currentState - 1;
        case 'reset':
            return intialState;
        default:
            return currentState;
    }
}

export const UseReducerCounter = () => {
    const [count,dispatch] = useReducer(reducer,intialState);

    return(
        <div>
            <p>Count - {count}</p>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}