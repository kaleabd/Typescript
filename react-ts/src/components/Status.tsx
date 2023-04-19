type StatusProps = {
    status: "loading" |"success" | "error"
}
export const Status = (props: StatusProps) => {
    let message: string = "";
    if(props.status === "loading") {
        message = "Loading...";
    }else if(props.status === "success") {
        message = "Data fetched succesfully!"
    }else if(props.status === "error") {
        message = "Error fetching data!";
    }
    return (
        <div>
            <h2>{message}</h2>
        </div>
    )
}