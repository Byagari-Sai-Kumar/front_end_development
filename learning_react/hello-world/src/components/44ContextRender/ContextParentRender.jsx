import React,{useState} from "react";
import {MemoizedContextChildOneRender} from './ContextChildRender'

export const countContext = React.createContext();
const CountProvider = countContext.Provider;

export const ContextParentRender = ({children}) => {
    const [count,setCount] = useState(0);

    console.log('Context parent render');
    return(
        <div>
            Context parent render
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increase count {count}</button>
            <br/>
            <CountProvider value={count}>
                {/* <MemoizedContextChildOneRender/> */}
                {children}
            </CountProvider>
        </div>
    )
}

//1. Since child one is wrapped with React.memo() and no props changes in it, it will go deeper and found 
//child four is consuming context which need to be updated and only child four is updated.

//2.Instead you can use same element reference method as well 