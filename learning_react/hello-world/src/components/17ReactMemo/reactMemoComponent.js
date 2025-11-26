import React,{Component} from "react";

const ReactMemoComponent = (props) => {
    const {name} = props;
    //console.log('Hello from Memo component');

    return(
        <>
            <p>Hello {name} from memo component.</p>
        </>
    )
}

export default React.memo(ReactMemoComponent)