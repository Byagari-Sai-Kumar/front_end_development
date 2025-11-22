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

    //key is a special/unique atttribute by which react can identify each element added,modified and deleted
    const finalPersonList = personList.map(eachPerson => <ChildList key={eachPerson.id} personDetails={eachPerson}/>)

    //using array index as key
    //this is not best practice using index as key because array may update anytime. not safe.
    //use this approach only when object do not have unique key
    //when list will not update or change
    //list is static and index are always same
    const secondaryPersonList = personList.map((eachPerson,index) => <ChildList key={index} personDetails={eachPerson}/>)
    return(
        <>
            {finalPersonList}
            {secondaryPersonList}
        </>
    )
}