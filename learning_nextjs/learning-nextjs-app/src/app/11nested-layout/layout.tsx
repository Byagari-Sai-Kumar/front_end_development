const NestedLayout = (
    {children}: {children: React.ReactNode}
) => {
    return(
        <>
            {children}
            <p>This is nested layout</p>
        </>
    )
}

export default NestedLayout;