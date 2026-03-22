import React, {useReducer} from "react";
import {UseReducerFive} from './useReducerFive';

export const CounterContext = React.createContext();

const initialState = 0;
const reducer = (currentState, action) => {
    switch(action){
        case 'increment':
            return currentState + 1;
        case 'decrement':
            return currentState - 1;
        case 'reset':
            return initialState;
        default:
            return currentState;
    }
}

export const UseReducerFour = () => {
    const [count,dispatch] = useReducer(reducer,initialState);

    return(
        <>
            <p>Global count - {count}</p>
            <CounterContext.Provider value={dispatch}>
                <UseReducerFive/>
            </CounterContext.Provider>
        </>
    )
}