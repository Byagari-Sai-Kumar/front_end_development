import React,{useState} from "react";

const initialArray = ['sai', 'kumar']

export const ImmutableStateArrayRender = () => {
    const [nameArray,setNamesArray] = useState(initialArray);

    const changeName = () => {
        // nameArray.push('ramesh');
        // nameArray.push('suresh');

        // setNamesArray(nameArray);

        const newNamesArray = [...nameArray];
        newNamesArray.push('ramesh');
        newNamesArray.push('suresh');

        setNamesArray(newNamesArray);
    }

    //console.log('ImmutableStateArrayRender');
    return(
        <div>
            <button onClick={changeName}>Change name</button>
            {
                nameArray.map(eachName => 
                    <div key={eachName}>
                        {eachName}
                    </div>
                )
            }
        </div>
    )
}