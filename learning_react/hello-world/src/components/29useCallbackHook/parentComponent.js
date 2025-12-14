import React, {useState,useCallback} from "react";
import Title from './title'
import Text from './text'
import Button from './button'

export const UseCallbackParentComponent = () => {
    const [age, setAge] = useState(0);
    const [salary, setSalary] = useState(50000);

    const increaseAge = useCallback(() => {
        setAge(prevAge => prevAge + 1)
    },[age])

    const increaseSalary = useCallback(() => {
        setSalary(prevSalary => prevSalary + 1000)
    },[salary])

    return(
        <>
            <Title/>
            <Text displayText={age}/>
            <Button increase={increaseAge}>Increase Age</Button>
            <Text displayText={salary}/>
            <Button increase={increaseSalary}>Increase Salary</Button>
        </>
    )
}