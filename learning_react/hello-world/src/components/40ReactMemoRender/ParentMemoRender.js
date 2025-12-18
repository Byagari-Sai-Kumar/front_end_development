import React,{useState} from "react";
import ChildMemoRender from './ChildMemoRender'

const initialState = 0;

export const ParentMemoRender = () => {
    const [count,setCount] = useState(initialState);
    const [name,setName] = useState('sai kumar');

    console.log('Parent Memo Render');
    return(
        <div>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
            <button onClick={() => {setName('ramesh')}}>change name - {name}</button>
            <ChildMemoRender name={name}/>
        </div>
    )
}

//1. In react when parent re-renders, child also re-renders.

//2. So using React.memo() passing in child will only re-renders when there is a change in the props.

//when to use same element reference method and react memo method

//1. When there is change in state but not in props use same element ref method. dont pass chid as direct children 
//instead pass as props

//2. this will not work if entire parent is re-render due to change in its props.

//3. state change yes. props change no.

//4. Directly check where props of child is affecting or not. props change child re-render else no re-render