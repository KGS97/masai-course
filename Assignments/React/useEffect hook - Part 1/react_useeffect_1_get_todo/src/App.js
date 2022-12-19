import "./App.css";
import Todo from "./components/Todo/Todo";
import FetchData from "./components/FetchData";
function App() {
  return (
    <div className="App">
      <div>
        <FetchData />
      </div>
      {/* <Todo /> */}
    </div>
  );
}

export default App;
