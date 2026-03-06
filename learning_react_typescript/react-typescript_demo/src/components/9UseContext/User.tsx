import { useContext } from "react"
import {UserContextCreation} from './UserContextCreation'

export const User = () => {
    const userContext = useContext(UserContextCreation);

    const handleLogin = () => {
        if(userContext){
            userContext.setUser({
                name: 'saikumar',
                email: 'sai@gmail.com'
            })
        }
    }

    const handleLogout = () => {
        if(userContext){
            userContext.setUser(null)
        }
    }

    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <p>User name is {userContext?.user?.name}</p>
            <p>Email is {userContext?.user?.email}</p>
        </div>
    )
}