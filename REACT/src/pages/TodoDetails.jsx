import { useParams, Link } from "react-router-dom";

const TodoDetail = () => {
  const { id } = useParams(); 
  return (
    <>
      <h1>Todo {id}</h1>
      <p>details todo with id {id}.</p>

      <Link to="/">← Go home</Link>
    </>
  );
};

export default TodoDetail;
