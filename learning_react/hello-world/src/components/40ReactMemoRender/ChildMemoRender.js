import React from "react";

const ChildMemoRender = () => {
    console.log('Child Memo Render');
    return(
        <div>Child Memo Render</div>
    )
}

export default React.memo(ChildMemoRender)