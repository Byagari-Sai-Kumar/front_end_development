export default function ParalleRoutesLayout({children,users,transactions,notifications,login}:
    {
        children: React.ReactNode;
        users: React.ReactNode;
        transactions: React.ReactNode;
        notifications: React.ReactNode;
        login: React.ReactNode
    }
): React.ReactNode{
    const isLoggedIn = true;
    
    return isLoggedIn ? 
    (
        <>
            {children}
            {users}
            {transactions}
            {notifications}
        </>
    ): (
        <>
            {login}
        </>
    )
}