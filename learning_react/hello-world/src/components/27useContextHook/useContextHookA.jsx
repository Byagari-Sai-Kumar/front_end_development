import React from "react";
import {UseContextHookB} from './useContextHookB'
import {ContextProvider,ContextProviderHook} from './context'

export const UseContextHookA = () => {
    return(
        <>
            <ContextProvider value={'sai kumar'}>
                <ContextProviderHook value='this is useContext Hook'>
                    <UseContextHookB/>
                </ContextProviderHook>
            </ContextProvider>
        </>
    )
}