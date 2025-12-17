import React,{useState} from "react";
import {ChildRender} from './ChildRender'

const initialState = 0;

export const ParentRender = () => {
    const [count,setCount] = useState(initialState);

    console.log('Parent Render');
    return(
        <div>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
            <button onClick={() => setCount(initialState)}>Reset</button>
            <button onClick={() => setCount(5)}>Increase 5</button>
            <ChildRender/>
        </div>
    )
}


//Case 1: When state changes to new state always parent and child both components re-render

//Case 2: When state set to initial state and once the parent,child will re-render and will never re-render again

//Case 3: when state set to 5 parent,child re-render and when again set to 5 only the parent component re-render 
//as a safety method and child will never re-render

//Notes

//1. Button click -> parent render -> child render

//2. DOM represented by child component never re-render

//3. child component went through render phase but not the commit phase

//4. Unnecessary re-render

//5. Unnecessary re-render does affect the performance.