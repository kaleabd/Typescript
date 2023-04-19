// in larger products we create types in different
// files and import them
// we can reuse types in different files
import { PersonProps } from "./Person.type"

export const Person = (props: PersonProps) => {
    return <div>{props.name.first} {props.name.last}</div>
}