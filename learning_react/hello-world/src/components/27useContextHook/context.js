import React from "react";

const UserContext = React.createContext();
const UserContextHook = React.createContext();


export const ContextProvider = UserContext.Provider;
export const ContextConsumer = UserContext.Consumer;

export const ContextProviderHook = UserContextHook.Provider;
export const ContextConsumerHook = UserContextHook.Consumer;

export {UserContext,UserContextHook}