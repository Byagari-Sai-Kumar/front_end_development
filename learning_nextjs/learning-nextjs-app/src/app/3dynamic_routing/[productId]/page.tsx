//*Dynamic Routing

//Situation where we need to show 100 of product details its not a good practice to create 100 folders.
//Instead we create a folder using [foldername] and then extract the id from the url and show in the component.

const ProductDetails = async (
    {params}:{params: Promise<{productId: string}>}
) => {
    const productId = (await params).productId;
    return(
        <h1>Details of the product {productId}</h1>
    )
}

export default ProductDetails;