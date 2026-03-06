export type HomeProps = {
    name: string
}

export const Home = ({name}: HomeProps) => {
    return(
        <p>Welcome to home page. Hello {name}</p>
    )
}