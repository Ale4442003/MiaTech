import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function TodoDetail() {
  const { id } = useParams();
  const todo = useSelector(s =>
    s.todos.todos.find(t => String(t.id) === String(id))
  );

  if (!todo) return <p>Todo non trovato</p>;

  return (
    <section>
      <h1>Todo {todo.id}</h1>
      <p>Titolo: {todo.title}</p>
      <p>Completed: {todo.completed.toString()}</p>
      <Link to="/">Torna alla Home</Link>
    </section>
  );
}
