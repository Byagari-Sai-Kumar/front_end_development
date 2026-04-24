//* Catch all segments

//Situations where there could be multiple path params where we could not maintain manual extracting
//params and use them
//we create a [...slug] folder which matches any kind of path params.
//from [..slug] we will extract the multiple params and then use them.

import NotFound from "./not-found";

const CatchAllSegments = async (
    {params}:{params: {slug?: string[]}}
) => {
    const {slug} = await params;
    console.log(typeof slug);

    if(slug?.length === 3){
        return <NotFound/>
    }else if(slug?.length === 2){
        return <p>Viewing docs for {slug[0]} and {slug[1]}</p>
    }else if(slug?.length === 1){
        return <p>Vewing docs for {slug[0]}</p>
    }
    return <p>Hello from catch all segments.</p>
}

export default CatchAllSegments;