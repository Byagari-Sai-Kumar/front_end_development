import React from "react";
import {UserConsumer} from './userContext'

export const ComponentContextC = () => {
    return(
        <>
            <p>Hello from ComponentContext C</p>
            <UserConsumer>
                {
                    (usernname) => {
                        return (
                            <p>Hello from componentContext C {usernname}</p>
                        )
                    }
                }
            </UserConsumer>
        </>
    )
}