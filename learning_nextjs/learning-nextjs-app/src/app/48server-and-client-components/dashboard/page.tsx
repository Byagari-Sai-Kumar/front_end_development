"use client";

import { useState } from "react"

export default function Dashboard(){
    const [name,setName] = useState("");

    console.log('hello from client component');
    return(
        <>
            <p>Welcome to user dashboard.</p>
            <p>Hello {name}</p>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
        </>
    )
}