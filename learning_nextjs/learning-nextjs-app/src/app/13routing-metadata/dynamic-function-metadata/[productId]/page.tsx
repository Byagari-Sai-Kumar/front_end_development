import { Metadata } from "next"

type Props = {
    params: Promise<{productId: string}>
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const productId = (await params).productId;
    const title = new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(`iphone ${productId}`)
        },100)
    })
    return {
        title: `Product ${title}`
    }
}

export default async function DynamicMetadata({params}: Props){
    const productId = (await params).productId;
    return(
        <>
            <p>Hello from Dynamic metadata page.</p>
            <p>Current product id is {productId}</p>
        </>
    )
}