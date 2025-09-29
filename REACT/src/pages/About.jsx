import {  useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const goHome = () => navigate("/");
  
  return (
    <>
    <h1>About</h1>
    <p>This application contains a Todo list</p>
    <button onClick={goHome}>Go Home</button>
    </>
  );
};

export default About;