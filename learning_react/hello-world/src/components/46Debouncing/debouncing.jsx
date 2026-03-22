import React,{useState,useCallback} from "react";

export const Debouncing = () => {
    const [name,setName] = useState('');

    const debounce = (fn,delay) => {
        console.log('debounce function called');
        let timer;

        return function(...args){
            clearTimeout(timer);

            timer = setTimeout(()=>{
                console.log('debounce function executed');
                fn(...args)
            },delay)
        }
    }

    const handleDebouncing = useCallback(
        debounce(
        (value)=>{
            console.log(value)
        }
        ,1000)
    ,[])

    const handleOnchange = (e) => {
        setName(e.target.value);
        handleDebouncing(e.target.value)
    }

    return(
        <>
            <input type="text" value={name} onChange={handleOnchange}/>
        </>
    )
}