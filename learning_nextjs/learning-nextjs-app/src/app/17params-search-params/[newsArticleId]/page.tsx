export default async function ParamsAndSearchParamsLayout(
    {params,searchParams}: {
        params: Promise<{newsArticleId: string}>,
        searchParams: Promise<{lang?: 'en' | 'sp' | 'fr'}>
    }
){
    const newsArticleId = (await params).newsArticleId;
    const lang = (await searchParams).lang;

    return(
        <>
            <p>Hre is the {newsArticleId}</p>
            <p>News language code {lang}</p>
        </>
    )
}