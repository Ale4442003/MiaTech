import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import useFetch from "./hooks/useFetch";
import useFilteredTodos from "./hooks/useFilteredTodos";
import { useTodos } from "./providers/TodosContext";

export default function TodoList() {
  const { data = [], loading, error } =
    useFetch("https://jsonplaceholder.typicode.com/todos");

  const { todos, setTodos } = useTodos();

  useEffect(() => {
    setTodos(data);
  }, [data, setTodos]);

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const filteredTodos = useMemo(() => {
    return useFilteredTodos(todos, searchTerm);
  }, [todos, searchTerm]);

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error)   return <p>Error: {error.message ?? String(error)}</p>;

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
          <li key={t.id}>{t.title}</li>
        ))}
      </ul>
    </>
  );
}
