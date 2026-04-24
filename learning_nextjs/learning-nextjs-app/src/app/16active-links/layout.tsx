"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function ActiveLinksRoute({children}:{children: React.ReactNode}){
    const pathname = usePathname();
    const isActive = pathname

    const links = [
        {
            link: 'batch',
            href: 'batch'
        },
        {
            link: 'class',
            href: 'class'
        },
        {
            link: 'section',
            href: 'section'
        },
    ]
    console.log('render');

    return(
        <>
            {
                links.map(eachLink => {
                    const isActive = pathname === `/16active-links/${eachLink.href}`;

                    return(
                        <Link key={eachLink.link} href={`${eachLink.href}`} style={isActive ? {fontWeight:'bold',color:'blue'} : undefined}>Go to {eachLink.link}</Link>
                    )
                })
            }
            {children}
        </>
    )
}