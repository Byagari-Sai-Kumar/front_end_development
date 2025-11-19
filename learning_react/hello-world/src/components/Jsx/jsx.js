import React from "react";

export const Greet = () => {
    return(
        <div>
            <h1>Hello from JSX!!</h1>
        </div>
    );
}

export const GoodMorning = () => {
    return(
        React.createElement(
            "div",
            {id:'goodMorning',className:'morning'},
            React.createElement(
                "h1",
                {id:'headingElement',className:'dummyClass'},
                "Hello from without JSX!!"
            )
        )
    );
}