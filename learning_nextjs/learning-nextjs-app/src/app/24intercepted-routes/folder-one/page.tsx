import Link from "next/link"

export default function FolderOne(){
    return(
        <>
            <p>This is folder one</p>
            <Link href={"/intercepted-routes/folder-one/folder-two"}>Go to folder two</Link>
        </>
    )
}