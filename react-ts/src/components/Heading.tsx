type HeadingType = {
    children: string
}

export const Heading = (props: HeadingType) => {
    return (
        <h2>{props.children}</h2>
    )
}