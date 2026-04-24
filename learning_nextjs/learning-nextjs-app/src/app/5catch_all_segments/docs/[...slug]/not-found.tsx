//By default all the next.js component are server side components.
//To make a component client side then use "use cleint" directive.

"use client"
import { usePathname } from "next/navigation"

export default function NotFound(){
    const pathName: string = usePathname();
    const pathThree: string = pathName.split('/')[3];
    const pathFour: string = pathName.split('/')[4];
    const pathFive = pathName.split('/')[5];

    return(
        <h1>This page is not found for {pathThree} - {pathFour} - {pathFive}</h1>
    )
}