import {useState } from "react"

type AuthUser = {
    name: string
    email: string
}

export const Home = () => {
    const [user, setUser] = useState<AuthUser| null>(null);

    const handleLogin = () => {
        setUser({
            name: 'saikumar',
            email: 'sai@gmail.com'
        })
    }

    const handleLogout = () => {
        setUser(null)
    }

    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <p>User name is {user?.name}</p>
            <p>Email is {user?.email}</p>
        </div>
    )
}

//In situations where state is decided in future tell react not to depend on strict types instead we can
//mention both possible types
//when using the object tsx automatically use optional chaining as it could be null if possible.