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

export default function App() {
  return (
  <>
    <Counter />
    <TextInput />
    <LoginForm />
    <UncontrolledInput />
    <UncontrolledInputP2 />
    <UncontrolledInputP3 />
  </>
  );
}

