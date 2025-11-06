import { useRef, useEffect, useState, useCallback } from "react";
import useFilteredTodos from "./hooks/useFilteredTodos";
//import { useTodos } from "./providers/TodosContext";
import { useSelector, useDispatch } from 'react-redux'//prendere i dati 
//import { completed } from './store/features/todoSlice';
import { toggleComplete } from './store/features/todoSlice';
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";


const TodoList = () => {

  const dispatch = useDispatch();
  //const { todos, loading, error } = useTodos();
  //entra nella chiave todos(store.js) e poi prendi la proprietà todos(slice)
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

   {filteredTodos.map(item => (
  <p key={item.id}>
    <Link to={`/todo/${item.id}`}>{item.title}</Link>{" "}
    {item.completed.toString()}{" "}
    <button onClick={() => dispatch(toggleComplete(item.id))}>
      Toggle
    </button>
  </p>
))}

    </>
  );

};

export default TodoList;

//</><button onClick={() => dispatch(completed(item.id))}>Toggle</button>