import { createContext } from "react";

export type AuthUser = {
    name: string
    email: string
}

export type UserContextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const UserContextCreation = createContext<UserContextType | null>(null);