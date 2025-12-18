import React,{useState} from "react";

const initialState = {
    fname : 'sai',
    lname : 'kumar'
}

export const ImmutableStateRender = () => {
    const [name,setName] = useState(initialState);

    const changeName = () => {
        // name.fname = 'ramesh';
        // name.lname = 'rao';

        // setName(name);

        const newName = {...name};
        newName.fname = 'ramesh';
        newName.lname = 'rao';

        setName(newName);
    }

    //console.log('ImmutableStateRender');
    return(
        <div>
            <button onClick={changeName}>{name.fname} {name.lname}</button>
        </div>
    )
}