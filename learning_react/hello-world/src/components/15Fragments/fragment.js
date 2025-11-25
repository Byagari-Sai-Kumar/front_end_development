import React from "react";

export const Fragment = () => {
    return(
        <div>
            <h1>
                Hello from Fragment
            </h1>
            <React.Fragment key="para1">
                <p>Here no dom nodes are been added around this para element</p>
            </React.Fragment>
        </div>
    )
}

//we can also use Fragment using <></> empty closing tags but here we cannot add key attribute