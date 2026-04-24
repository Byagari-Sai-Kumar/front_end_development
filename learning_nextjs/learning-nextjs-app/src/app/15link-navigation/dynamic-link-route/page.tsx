import Link from "next/link";

export default function DynamicLinkRoute(){
    const productId = 100;

    return(
        <>
            <Link href={`/3dynamic_routing/${productId}`}>Go to product id {productId}</Link>
            <Link href={`/4nested_dynamic_routing/products/${productId}/reviews/${productId}`}>Go to products and review page</Link>
        </>
    )
}