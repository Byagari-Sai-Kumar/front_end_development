//If we are using react v16 then import react at the top. if react v > 16 then no need to import react
//React.ReactNode is used while passing children
type OscarProps = {
    children : React.ReactNode
}

export const Oscar = (props: OscarProps) => {
    return(
        <div>
            <p>{props.children}</p>
        </div>
    )
}