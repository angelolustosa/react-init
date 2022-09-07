export function Book(props) {

    console.log(props)

    return (
        <h3>{`id: ${props.id}, Título: ${props.title}`}</h3>
    );
}