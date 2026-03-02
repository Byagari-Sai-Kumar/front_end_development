type PageStatus = {
    currentStatus: "loading" | "success" | "error"
}

export const Status = (props: PageStatus) => {
    let message;
    if(props.currentStatus === "loading"){
        message = "Laoding..."
    }else if(props.currentStatus === "success"){
        message = "Data fetch successfully!!"
    }else if(props.currentStatus === "error"){
        message = "Error occured."
    }
    return(
        <div>
            {message}
        </div>
    )
}