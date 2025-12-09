import React, {act, useReducer} from "react";

const initialState = {
    firstCounter : 0,
    secoundCounter : 100
}
const reducer = (state,action) => {
    switch(action.type){
        case 'increment1':
            return {...state,firstCounter: state.firstCounter + action.value}
        case 'decrement1':
            return {...state,firstCounter: state.firstCounter - action.value}
        case 'increment2':
            return {...state,secoundCounter : state.secoundCounter + action.value}
        case 'decrement2':
            return {...state,secoundCounter : state.secoundCounter - action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}

export const UseReducerCounterTwo = () => {
    const [count,dispatch] = useReducer(reducer,initialState);
    return(
        <div>
            <p>First Counter - {count.firstCounter}</p>
            <button onClick={() => dispatch({type : 'increment1', value : 1})}>Increment</button>
            <button onClick={() => dispatch({type : 'decrement1', value : 1})}>Decrement</button>
            <button onClick={() => dispatch({type : 'reset'})}>Reset</button>

            <p>Second Counter - {count.secoundCounter}</p>
            <button onClick={() => dispatch({type : 'increment2', value : 1})}>Increment</button>
            <button onClick={() => dispatch({type : 'decrement2', value : 1})}>Decrement</button>
            <button onClick={() => dispatch({type : 'reset'})}>Reset</button>
        </div>
    )
}


//In this example we used state as an object
//so that we can dispatch multiple or additional information to the actions
//we can store more than one state variable
//always remember to use spread operator while updating the state