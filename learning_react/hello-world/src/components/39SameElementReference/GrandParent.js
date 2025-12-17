import React,{useState} from "react";
import { ParentOneRender } from "./ParentRender";
import { ChildOneRender } from "./ChildRender";

const initialState = 0;

export const GrandParentOne = ({children}) => {
    const [count,setCount] = useState(initialState);

    console.log('GrandParent Render');
    return(
        <div>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>Count = {count}</button>
            <ParentOneRender count={count}>
                <ChildOneRender/>
            </ParentOneRender>
        </div>
    )
}

//1. When the parent state is changed only the parent is changed and child is not changed due to props cant to be changed fundamental

//2. But when the grand parent state is changes and passing some props sent to parent component the whole parent including
//child component will re-render assuming that new props might has received so render entire parent and child components.

