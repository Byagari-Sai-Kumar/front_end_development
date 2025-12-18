import React,{useState} from "react";

export const UseStateRender = () => {
    const [count,setCount] = useState(0);

    //console.log('UseStateRender');
    return(
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Count - {count}</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(5)}>Increase to 5</button>
        </div>
    )
}

//Here setCount(0) is re-rendered once and will never render again, because setting the state to the initial state
//again will not re-render the DOM