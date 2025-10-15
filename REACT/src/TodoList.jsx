import { useRef, useEffect, useState, useCallback } from "react";
import useFilteredTodos from "./hooks/useFilteredTodos";
//import { useTodos } from "./providers/TodosContext";
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";


const TodoList = () => {
  //const { todos, loading, error } = useTodos();
  const todos = useSelector((state) => state.todos.todos)
  const loading = useSelector((state) => state.todos.loading)
  const error = useSelector((state) => state.todos.error)


  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") ?? "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSearchChange = useCallback((e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSearchParams(value ? { q: value } : {});
  }, [setSearchParams]);


  const filteredTodos = useFilteredTodos(todos, searchTerm);

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error: {String(error)}</p>;

  return (
    <>
      <h2>Section Todo List</h2>

      <input
        ref={inputRef}
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search"
      />

      <ul>
        {filteredTodos.slice(0, 10).map((t) => (
          <li key={t.id}>
            <Link to={`/todo/${t.id}`}>{t.title}</Link>
          </li>
        ))}
      </ul>

    </>
  );
};

export default TodoList;
