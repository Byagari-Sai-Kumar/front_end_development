import React,{useReducer}from "react";

const initialState = 0;
const reducer = (currentState,action) => {
    switch(action){
        case 'increment':
            return currentState + 1;
        case 'reset':
            return initialState;
        default:
            return currentState;
    }
}

export const UseReducerRender = () => {
    const [currentState,dispatch] = useReducer(reducer,initialState);

    //console.log('UseReducerRender');
    return(
        <div>   
            <button onClick={() => dispatch('increment')}>Count - {currentState}</button>
            <button onClick={() => dispatch('reset')}>Count - {currentState}</button>
        </div>
    )
}