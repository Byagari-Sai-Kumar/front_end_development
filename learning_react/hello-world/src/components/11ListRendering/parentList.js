import React from "react";
import {ChildList} from './childList';

export const ParentList = () => {
    const personList = [
        {
            id : 1,
            name : 'sai kumar',
            age : 25,
            skills : 'React'
        },
        {
            id : 2,
            name : 'ramesh',
            age : 28,
            skills : 'Angular'
        },
        {
            id : 3,
            name : 'rahul',
            age : 40,
            skills : 'Vuejs'
        },
    ]
    const finalPersonList = personList.map(eachPerson => <ChildList personDetails={eachPerson}/>)
    return(
        <>
            {finalPersonList}
        </>
    )
}