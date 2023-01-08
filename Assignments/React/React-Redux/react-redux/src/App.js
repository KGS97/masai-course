import "./App.css";
import Todo from "./Components/React_Components/Todo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDoItemPage from "./Components/React_Components/ToDoItemPage";
import Login from "./Components/React_Components/Login";
import { useSelector } from "react-redux";
function App() {
  let token = useSelector(
    (data) => data.login.token || localStorage.getItem("token")
  );
  console.log(token);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/">
            <Route index element={token ? <Todo /> : <Login />} />
            <Route path="/:id" element={<ToDoItemPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
