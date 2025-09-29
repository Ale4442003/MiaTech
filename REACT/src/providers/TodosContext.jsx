import { createContext, useContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const TodosContext = createContext();

export const useTodos = () => useContext(TodosContext);

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos");

  useEffect(() => {
    if (Array.isArray(data)) setTodos(data);
  }, [data]);

  return (
    <TodosContext.Provider value={{ todos, setTodos, loading, error }}>
      {children}
    </TodosContext.Provider>
  );
};
