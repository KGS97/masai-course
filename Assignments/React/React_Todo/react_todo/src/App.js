import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Todo from "./components/Todo/Todo";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Card />
      <Todo />
    </div>
  );
}

export default App;
