import { Metadata } from "next"

export const metadata: Metadata = {
    title : {
        absolute: 'Title Page'
    }
}

export default function TitleMetadat(){
    return(
        <p>Hello from Title Metadata</p>
    )
}