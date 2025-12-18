import React from "react";

const ChildThreeMemoRender = (props) => {
    const {name,person} = props;

    console.log('Child Three Memo Render');
    return(
        <div>
            {name}
            {person.fname}-{person.lname}
            Child Three Memo Render
        </div>
    )
}

export default React.memo(ChildThreeMemoRender)