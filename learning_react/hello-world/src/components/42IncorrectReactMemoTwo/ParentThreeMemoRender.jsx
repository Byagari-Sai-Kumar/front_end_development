import React,{useState} from "react";
import ChildThreeMemoRender from './ChildThreeMemoRender'

const initialState = 0;

export const ParentThreeMemoRender = () => {
    const [count,setCount] = useState(initialState);
    const [name,setName] = useState('sai kumar');

    const person = {
        fname : 'sai',
        lname : 'kumar'
    }

    console.log('Parent Three Memo Render');
    return(
        <div>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
            <button onClick={() => {setName('ramesh')}}>change name - {name}</button>
            <ChildThreeMemoRender name={name} person={person}/>
        </div>
    )
}

//Even though there is no change in person, just because of sending object react assumes
//as a new reference and child component always re-renders.