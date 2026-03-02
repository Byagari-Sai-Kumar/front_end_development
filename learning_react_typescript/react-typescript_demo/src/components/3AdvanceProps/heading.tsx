type HeaderProps = {
    children: string
}

export const Header = (props: HeaderProps) => {
    return(
        <p>{props.children}</p>
    )
}