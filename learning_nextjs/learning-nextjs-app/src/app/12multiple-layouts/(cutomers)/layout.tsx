export default function MultipleLayoutsCustomers(
    {children}:{children: React.ReactNode}
){
    return(
        <>
        {children}
        <p>This layout is specific for multiple layout customers route</p>
        </>
    )
}