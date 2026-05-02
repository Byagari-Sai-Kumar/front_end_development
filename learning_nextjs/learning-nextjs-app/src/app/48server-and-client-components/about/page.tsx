//import { useState } from "react"
import Link from "next/link"

export default function About(){
    //const [name,setName] = useState("");

    console.log('Hello from server component')
    return(
        <>
            <p>Hello from server component!!</p>
            <Link href='/48server-and-client-components/dashboard'>Dashboard</Link>
        </>
    )
}

