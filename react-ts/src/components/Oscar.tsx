type OscarProps = {
    //children props type
    children: React.ReactNode
}
export const Oscar = (props: OscarProps) => {
    return <div>{props.children}</div>
}