export default async function LoadingProducts(){
    await new Promise((res) => {
        setTimeout(() => {
            res('intentional dealay')
        },2000)
    })
    return(
        <>
            <p>Please find the products here...!!</p>
        </>
    )
}