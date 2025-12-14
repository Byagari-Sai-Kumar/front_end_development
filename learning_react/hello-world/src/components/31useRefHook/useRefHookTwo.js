import React, {useState,useEffect,useRef} from "react";

export const UseRefHookTwo = () => {
    const [timer,setTimer] = useState(0);
    const timerRef = useRef();

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        },1000)

        return () => {
            clearInterval(timerRef.current)
        }
    },[])

    return(
        <>
            <p>Timer - {timer}</p>
            <button onClick={() => clearInterval(timerRef.current)}>Stop Timer</button>
        </>
    )
}