//when we're dealing with input most of the time
// we will be handling the input  value and the onchange event
type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {
    return <input type="text" value={props.value} onChange={props.handleChange}/>;
}