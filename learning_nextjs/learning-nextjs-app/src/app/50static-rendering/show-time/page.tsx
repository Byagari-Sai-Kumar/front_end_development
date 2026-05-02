export default function ShowTime(){
    return(
        <>
            <p>The current time is {new Date().toLocaleTimeString()}</p>
        </>
    )
}