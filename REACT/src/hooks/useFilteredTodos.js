import { useState, useEffect } from "react";

export default function useFilteredTodos(todos, searchTerm) {
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const list = Array.isArray(todos) ? todos : [];
    const term = (searchTerm || "").toLowerCase();

    const out = list.filter((todo) =>
      todo.title.toLowerCase().includes(term)
      // se vuoi anche userId === 7, aggiungi:
      // && todo.userId === 7
    );

    setFiltered(out);
  }, [todos, searchTerm]);

  return filtered;
}
