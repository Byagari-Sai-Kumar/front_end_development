import React,{useState,useMemo,useCallback} from "react";
import PracticeComponentB from './practiceComponentB'

export const PracticeComponentA = () => {
    const [count,setCount] = useState(0);
    const [salary,setSalary] = useState(0);

    const increaseCount = () => {
        setCount(prevState => prevState + 1)
    }

    const isSalaryEven = useMemo(() => {
        let i = 0;
        while(i < 2000000000) i++;
        return salary % 2 === 0;
    },[salary])

    const increaseSalary = useCallback(() => {
        setSalary(prevSalary => prevSalary + 1)
    },[salary])

    console.log('parent re-render');
    return(
        <>
            <p>Count - {count}</p>
            <button onClick={increaseCount}>Increase count</button>
            <PracticeComponentB salary={salary} isSalaryEven={isSalaryEven} increaseSalary={increaseSalary}/>
        </>
    )
}