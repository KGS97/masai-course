import "./App.css";
import ProductPage from "./Components/ProductPage";
import ProductsContext from "./Context/ProductsContext";
import {
  BrowserRouter,
  Route,
  Routes,
  useParams,
  Link,
} from "react-router-dom";
import Products from "./Components/Products";
function App() {
  let products = [
    {
      name: "SmartPhone",
      price: 30,
      id: 0,
    },
    {
      name: "Watch",
      price: 20,
      id: 1,
    },
    {
      name: "Shirt",
      price: 50,
      id: 2,
    },
    {
      name: "Pants",
      price: 100,
      id: 3,
    },
  ];
  return (
    <>
      <ProductsContext.Provider value={products}>
        <div className="App"></div>
        <Routes>
          <Route
            path="/"
            element={
              <Link to="/products">
                <button>Products</button>
              </Link>
            }
          ></Route>
          <Route path="/products" element={<Products />} />
          <Route path="/ProductPage/:id" element={<ProductPage />} />
          <Route path="*" element={<p>Page does not exist</p>} />
        </Routes>
      </ProductsContext.Provider>
    </>
  );
}

export default App;