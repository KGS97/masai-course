import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter/Counter";
import InputBox from "./InputBox/InputBox";
import ToDo from "./ToDo/ToDo";
function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      {/* <Counter />
      <InputBox /> */}
      <ToDo />
    </div>
  );
}

export default App;
