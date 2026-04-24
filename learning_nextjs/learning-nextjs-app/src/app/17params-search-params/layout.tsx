import Link from "next/link";

export default async function ParamsAndSearchParamsLayout(
    {children}:{
        children: React.ReactNode,
        // params: Promise<{}>
    }
){
    // console.log((await params).newsArticleId);
    return(
        <>
            {children}
            <Link href='/17params-search-params/breaking-news-123?lang=en'>English</Link>
            <br/>
            <Link href='/17params-search-params/breaking-news-456?lang=sp'>Spanish</Link>
            <br/>
            <Link href='/17params-search-params/breaking-news-789?lang=fr'>French</Link>
        </>
    )
}