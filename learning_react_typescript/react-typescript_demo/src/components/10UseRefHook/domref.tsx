import { useEffect,useRef } from "react"

export const InputElement = () => {
    const inputRef = useRef<HTMLInputElement>(null!);

    useEffect(() => {
        inputRef.current.focus()
    },[])

    return(
        <input type="text" ref={inputRef}/>
    )
}