import Link from "next/link"

export default function CustomerSupport(){
    return(
        <>
            <p>Welcome to customer support page.</p>
            <Link href="queries" replace>Go to queries page</Link>
        </>
    )
}