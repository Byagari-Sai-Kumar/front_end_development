import { useState } from "react"

export const Home = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        setLoggedIn(true);
    }

    const handleLogout = () => {
        setLoggedIn(false);
    }

    return(
        <div>
            {loggedIn ? 'Welcome User' : "Please Login"}
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
} 

//ts is smart enough checking types. and when we try to check loggedIn.length it will shown an error. 
//because boolean values does not have any length.
//when we try to assign a wrong type value, ts shows an error. in js since 0 is considered as falsy value we cannot
//assign it to setLoggedIn(0). ts checks the initial assignment. 