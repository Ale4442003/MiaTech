import { useState, useCallback} from "react";
import useFetch from "./hooks/useFetch";
import useFilteredTodos from "./hooks/useFilteredTodos";

export default function TodoList() {
  // QUI il fix: [] e non "l"
  const { data = [], loading, error } =
    useFetch("https://jsonplaceholder.typicode.com/todos");

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = useCallback((e) => {
  setSearchTerm(e.target.value);
}, []); 


  const filteredTodos = useFilteredTodos(data, searchTerm);

  if (loading) return <p>Loading...</p>;
  if (error)   return <p>Error: {error}</p>;

  return (
    <>
      <h2>Section Todo List</h2>

      <input
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
