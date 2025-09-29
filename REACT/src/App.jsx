// import { Component } from "react";     
// import HelloWorld from "./Helloworld.jsx";

// class App extends Component {
//   render() {
//     return (
//       <>
//         <HelloWorld />
//       </>
//     );
//   }
// }

// export default App;

import Counter from "./Counter";
import TextInput from "./TextInput";
import LoginForm from "./LoginForm";
import UncontrolledInput from "./UncontrolledInput";
import UncontrolledInputP2 from "./UncontrolledInputP2";
import UncontrolledInputP3 from "./UncontrolledInputP3";
import ItemList from "./ItemList";
import CityList from "./CityList";
import Card from "./Card";
import TodoList from "./TodoList";
import { TodosProvider } from "./providers/TodosContext";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

import { Route, Routes } from "react-router-dom"

const App = () => {
  const cities = ["Bergamo", "Milano", "Roma"];

  return (

    <>
      <Counter />
      <TextInput />
      <LoginForm />
      <UncontrolledInput />
      <UncontrolledInputP2 />
      <UncontrolledInputP3 />
      <ItemList items={cities} />
      <CityList />

      <Card>
        <h2>Title card</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </Card>

      <Card>
        <button>Click me</button>
      </Card>

      <Card>
        <h2>Section Counter</h2>
        <Counter />
      </Card>

      <Card>
        <h2>Section Form</h2>
        <TextInput />
        <LoginForm />
      </Card>

      <Card>
        <h2>Section Lists</h2>
        <CityList />
      </Card>

      <TodosProvider>
        <TodoList />
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </TodosProvider>
    </>

  );
};

export default App;
