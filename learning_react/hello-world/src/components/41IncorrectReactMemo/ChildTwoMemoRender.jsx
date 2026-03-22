import React from "react";

const ChildTwoMemoRender = ({children}) => {
    console.log('Child Two Memo Render');
    return(
        <div>{children} Child Two Memo Render</div>
    )
}

export default React.memo(ChildTwoMemoRender)