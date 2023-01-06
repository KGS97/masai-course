import "./App.css";
import Todo from "./Components/React_Components/Todo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDoItemPage from "./Components/React_Components/ToDoItemPage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/">
            <Route index element={<Todo />} />
            <Route path="/:id" element={<ToDoItemPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
