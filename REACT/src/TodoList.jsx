import useFetch from "./hooks/useFetch";

const TodoList = () => {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
        <>
            {loading && <p>Loading</p>}
            {error && <p>Error</p>}
            {data && (
                <ul>
                    {data.slice(0, 10).map(todo => (
                        <li key={todo.id}>{todo.title}</li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default TodoList;