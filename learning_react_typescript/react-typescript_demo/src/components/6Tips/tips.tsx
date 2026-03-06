type PropsTipsProps = {
    name: string
}

//Props Destructuring
export const PropsTips = ({name}: PropsTipsProps) => {
    return(
        <div>
            {name}
        </div>
    )
}