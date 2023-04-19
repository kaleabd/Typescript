// usestate future values
import { useState } from "react";

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null)

    const handleLogin = () => {
        setUser({
            name: 'Kaleab',
            email: 'kaleab@gmail.com',
        })
    }
    const handleLogout = () => {
        setUser(null)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>user name is {user?.name}</div>
            <div>user email is {user?.email}</div>
        </div>
    )
}