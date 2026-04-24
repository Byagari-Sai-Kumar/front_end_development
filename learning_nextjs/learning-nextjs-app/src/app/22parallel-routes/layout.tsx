export default function ParalleRoutesLayout({children,users,transactions,notifications}:
    {
        children: React.ReactNode;
        users: React.ReactNode;
        transactions: React.ReactNode;
        notifications: React.ReactNode;
    }
): React.ReactNode{
    return(
        <>
            {children}
            {users}
            {transactions}
            {notifications}
        </>
    )
}