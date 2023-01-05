import "./App.css";
import Todo from "./Components/React_Components/Todo";
import { Provider } from "react-redux";
import Store from "./Components/Redux/Store/Store";
function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
