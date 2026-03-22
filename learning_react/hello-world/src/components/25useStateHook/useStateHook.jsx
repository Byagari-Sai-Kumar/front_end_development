import React, {useState} from "react";

export const UseStateHook = () => {
    const [count,setCount] =  useState(0);

    //always update count based on prevStateCount
    //always use arrow functions while updating
    
    
    //useState on objects
    //while using objects and updating some part of object we need to copy the remaining keys and updating the 
    //required key. Because in class components setState() will merge the keys but in useState it will 
    //not merge the keys. we need to do it manually using spread operator

    const [name,setName] =  useState({firstName : "", lastName : ""})



    //useState on arrays
    const [items,setItems] = useState([]);

    const addNumber = () => {
        setItems([...items,{
            id : items.length,
            value : Math.floor(Math.random() * 10) + 1
        }])
    }

    return(
        <>
            <p>Count {count}</p>
            <button onClick={() => setCount(prevState => prevState + 1)}>Increase One</button>
            <button onClick={() => setCount(prevState => prevState - 1)}>Decrease One</button>
            <button onClick={() => setCount(prevState => prevState + 5)}>Increase Five</button>

            <form>
                <input type="text" value={name.firstName} onChange={e => setName({...name,firstName : e.target.value})}/>
                <input type="text" value={name.lastName} onChange={e => setName({...name,lastName: e.target.value})}/>
            </form>
            <p>Hello! My first name is {name.firstName} and last name is {name.lastName}</p>

            <button onClick={addNumber}>Add a random number</button>
            <ul>
                {
                    items.map(eachItem => <li key={eachItem.id}>{eachItem.value}</li>)
                }
            </ul>
        </>
    )
}