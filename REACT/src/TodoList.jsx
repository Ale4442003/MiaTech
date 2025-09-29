import { useRef, useEffect, useState, useCallback } from "react";
import useFilteredTodos from "./hooks/useFilteredTodos";
import { useTodos } from "./providers/TodosContext";

const TodoList = () => {
  const { todos, loading, error } = useTodos();

  const [searchTerm, setSearchTerm] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSearchChange = useCallback(
    (e) => setSearchTerm(e.target.value),
    []
  );

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
          <li key={t.id}>{t.title}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
