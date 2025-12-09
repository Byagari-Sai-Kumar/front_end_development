import React from "react";
import {ContextConsumer,ContextConsumerHook} from './context'
import { useContext } from "react";
import {UserContext,UserContextHook} from './context'

//useContext Hook will only simplifies the consumption of the value, creating and providing will the same.

export const UseContextHookC = () => {
    // return(
    //     <ContextConsumer>
    //         {
    //             (user) => {
    //                 return (
    //                     <ContextConsumerHook>
    //                         {
    //                             (currentHook) => {
    //                                 return(
    //                                     <p>im {user}, current using {currentHook}</p>
    //                                 )
    //                             }
    //                         }
    //                     </ContextConsumerHook>
    //                 )
    //             }
    //         }
    //     </ContextConsumer>
    // )

    const name = useContext(UserContext);
    const currentHook = useContext(UserContextHook);

    return(
        <p>I'm {name}, current using {currentHook}</p>
    )

}