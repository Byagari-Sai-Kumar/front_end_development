import React, {useState} from "react";
import {useDocumentTitle} from './useDocumentTitle'

export const UseDocumentTitleCounter = () => {
    const [count, setCount] = useState(0);

    useDocumentTitle(count);

    return(
        <div>
            <button onClick={() => setCount(count + 1)}>Counter - {count}</button>
        </div>
    )
}