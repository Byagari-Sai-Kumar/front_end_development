import React,{useState} from "react";
import ChildTwoMemoRender from './ChildTwoMemoRender'

const initialState = 0;

export const ParentTwoMemoRender = () => {
    const [count,setCount] = useState(initialState);
    const [name,setName] = useState('sai kumar');

    console.log('Parent Two Memo Render');
    return(
        <div>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
            <button onClick={() => {setName('ramesh')}}>change name - {name}</button>
            <ChildTwoMemoRender name={name}>
                <p>Helloo</p>
            </ChildTwoMemoRender>
        </div>
    )
}

//1. React memo is not suitable when we need to pass html elements as children since it will always assume as
//a new reference.