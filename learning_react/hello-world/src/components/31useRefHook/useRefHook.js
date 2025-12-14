import React, {useEffect, useRef}from "react";

export const UseRefHook = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    },[])

    return(
        <input type="text" ref={inputRef}/>
    )
}