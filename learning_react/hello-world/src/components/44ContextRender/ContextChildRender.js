import React, {useContext} from "react";
import {countContext} from './ContextParentRender'

export const ContextChildOneRender = () => {
    console.log('Context child one render');
    return(
        <div>
            Context child one render
            <ContextChildTwoRender/>
        </div>
    )
}

export const MemoizedContextChildOneRender = React.memo(ContextChildOneRender)

export const ContextChildTwoRender = () => {
    console.log('Context child two render');
    return(
        <div>
            Context child two render
            <ContextChildThreeRender/>
        </div>
    )
}

export const ContextChildThreeRender = () => {
    console.log('Context child three render');
    return(
        <div>
            Context child three render
            <ContextChildFourRender/>
        </div>
    )
}

export const ContextChildFourRender = () => {
    const count = useContext(countContext);

    console.log('Context child four render');
    return(
        <div>
            Context child four render - count {count}
        </div>
    )
}