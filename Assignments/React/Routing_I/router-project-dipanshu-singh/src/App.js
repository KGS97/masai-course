import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
