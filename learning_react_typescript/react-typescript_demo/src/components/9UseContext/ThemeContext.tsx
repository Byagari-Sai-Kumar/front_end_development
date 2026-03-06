import {ThemeContext} from './ThemeContextCreation'
import { theme } from "./theme";

type ThemeContextProviderProps = {
    children: React.ReactNode
}

export const ThemeContextProvider = ({children}: ThemeContextProviderProps) => {
    return(
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}