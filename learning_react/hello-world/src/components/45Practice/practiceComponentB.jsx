import React from "react";

const PracticeComponentB = (props) => {
    const {salary,isSalaryEven,increaseSalary} = props;

    console.log('child re-render');
    return(
        <>
            <p>{salary}</p>
            <p>{isSalaryEven ? 'even': 'odd'}</p>
            <button onClick={increaseSalary}>Increase salary</button>
        </>
    )
}

export default React.memo(PracticeComponentB)