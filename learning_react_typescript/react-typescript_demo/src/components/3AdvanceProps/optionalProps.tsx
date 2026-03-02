//here using ? after prop name says that this is an optional prop.
type OptionalPropsProps = {
    name: string
    age?: number
    isIndian: boolean
}

export const OptionalProps = (props: OptionalPropsProps) => {
    const {age = 0} = props
    return(
        <div>   
            <p>Hello from optional props. 
                I'm {props.name}. 
                I'm {age} old and
                {props.isIndian ? <span>Indian</span> : <span>Not a Indian</span>}
            </p>
        </div>
    )
}