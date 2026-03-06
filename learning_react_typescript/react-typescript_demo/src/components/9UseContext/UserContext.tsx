import { useState } from 'react'
import {UserContextCreation} from './UserContextCreation'
import type { AuthUser } from './UserContextCreation'

type UserContextProviderProps = {
    children: React.ReactNode
}

export const UserContextProvider = ({children}: UserContextProviderProps) => {
    const [user,setUser] = useState<AuthUser | null>(null);

    return(
        <UserContextCreation.Provider value={{user,setUser}}>
            {children}
        </UserContextCreation.Provider>
    )
}