export default function Charts(){
    return(
        <h1>Welcome to charts page!!</h1>
    )
}

//There are not accidental components calling in next.js
//Next.js always looks for page.tsx only.
//Always the component inside page.tsx must be export default. named exports will show an error.