import React from "react";

const ReactMemoChild = (props) => {
    const {name,person} = props;

    console.log('React memo child render');
    return(
        <div>
            {name.fname} {name.lname}
            <br/>
            {person.fname}-{person.lname}
            <br/>
            React child memo render
        </div>
    )
}

export default React.memo(ReactMemoChild)