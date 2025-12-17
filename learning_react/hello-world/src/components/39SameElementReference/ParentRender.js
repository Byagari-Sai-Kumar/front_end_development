import React,{useState} from "react";

const initialState = 0;

export const ParentOneRender = ({children}) => {
    const [count,setCount] = useState(initialState);

    console.log('Parent One Render');
    return(
        <div>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
            <button onClick={() => setCount(initialState)}>Reset</button>
            <button onClick={() => setCount(5)}>Increase 5</button>
            {children}
        </div>
    )
}

//1. Component can change its state but not the props.

//2. when state changes react looks at parent component and re-render the parent

//3. since there is no means of directly changing props, child props should have not changed.

//4. make use of react element that was previously created.

//5. Children props has to be referencing the same element from the previous render,
//so will skip render phase for child component