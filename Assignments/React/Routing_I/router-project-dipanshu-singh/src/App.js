import { Routes, Route } from "react-router-dom";
import Cart from "./Routes/Cart";
import HiutXLavenham from "./Routes/HiutXLavenham";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Error from "./Routes/Error";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/hiut-x-lavenham" element={<HiutXLavenham />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
