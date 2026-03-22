import React,{useState,useMemo,useCallback} from "react";
import ReactMemoChild from './ReactMemoChild'

const initialState = 0;
const initialName = {
    fname : 'sai',
    lname : 'kumar'
}

export const ReactMemoParent = () => {
    const [count,setCount] = useState(initialState);
    const [name,setName] = useState(initialName);

    const person = {
        fname : 'suresh',
        lname : 'kumar'
    }

    const memoizedPerson = useMemo(() => person,[])

    const handleClick = () => {}

    const memoizedHandleClick = useCallback(handleClick,[])

    console.log('React memo parent render');
    return(
        <div>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
            <button onClick={() => setName(memoizedPerson)}>change name - {name.fname} {name.lname}</button>
            <ReactMemoChild name={name} person={memoizedPerson} handleClick={memoizedHandleClick}/>
        </div>
    )
}

//1.useMemo will memorize the previous function's result and stop causing re-renders

//2.useCallback will memorize the previous function and stop causing re-renders