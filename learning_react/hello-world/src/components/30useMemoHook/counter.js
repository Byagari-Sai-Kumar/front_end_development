import React, {useState, useMemo} from "react";

export const UseMemoHook = () => {
    const [counterOne,setCounterOne] = useState(0);
    const [counterTwo,setCounterTwo] = useState(100);

    const handleCounterOne = () => {
        setCounterOne(counterOne + 1)
    }

    const isEven = useMemo(() => {
        let i = 0;
        //while(i < 2000000000) i++;
        return counterOne % 2 === 0;
    },[counterOne])

    const handleCounterTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    return(
        <div>
            <button onClick={handleCounterOne}>Counter One - {counterOne}</button>
            <p>{isEven ? 'Even' : 'Odd'}</p>
            <button onClick={handleCounterTwo}>Counter Two - {counterTwo}</button>
        </div>
    )
}

//Difference between useCallback and useMemo

//useCallback caches the provided function instance itself
//useMemo calls the provided function and caches its result

//so if you want to cache the function, use useCallback and if you want to cache the result of a invocked function use useMemo