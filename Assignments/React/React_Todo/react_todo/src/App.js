import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Todo from "./components/Todo";
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
