type ListType = {
    name: string
}

const List = ({name}: ListType) => {
    return(
        <li>{name}</li>
    )
}

export default List