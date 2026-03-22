import React from "react";
import  ComponentContextB  from "./componentContextB";

export const ComponentContextA = () => {
    return(
        <>
            <p>Hello from ComponentContext A</p>
            <ComponentContextB/>
        </>
    )
}