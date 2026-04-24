export default function MultipleLayoutsAuth(
    {children}:{children: React.ReactNode}
){
    return(
        <>
        {children}
        <p>This layout is specific for multiple layout auth route</p>
        </>
    )
}