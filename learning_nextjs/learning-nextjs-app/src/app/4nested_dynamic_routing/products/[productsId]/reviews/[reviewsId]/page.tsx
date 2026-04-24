//*Nested Dynamic Routing

//Situations where there are multiple nested routings we can extract params from the url and use them.

import NotFound from "@/app/not-found";

const NestedDynamicRouting = async (
    {params}:{params : Promise<{productsId: string; reviewsId: string}>}
) => {
    const {productsId,reviewsId} = await params;

    if(parseInt(reviewsId) > 1000){
        return <NotFound/>
    }

    return(
        <>
        <h1>Nested Dynamic Routing!!</h1>
        <p>Deatails showing for product Id {productsId} and review Id {reviewsId}</p>
        </>
    )
}

export default NestedDynamicRouting;

//* Folder name and promise object key must be always same.