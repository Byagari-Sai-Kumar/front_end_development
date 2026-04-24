import Link from "next/link"

export default function FolderThree(){
    return(
        <>
            <p>This is folder three</p>
            <Link href={'/intercepted-routes/folder-one/folder-three'}>go to intercepted folder three</Link>
        </>
    )
}