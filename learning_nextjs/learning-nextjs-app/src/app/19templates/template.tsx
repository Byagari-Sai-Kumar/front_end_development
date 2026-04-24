"use client";
import { useState } from "react";

export default function Template({children}:{children: React.ReactNode}){
    const [name, setName] = useState("");
    return(
        <>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            {children}
        </>
    )
}