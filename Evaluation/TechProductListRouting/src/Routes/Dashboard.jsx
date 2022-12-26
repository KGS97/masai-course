import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import SingleProductPage from "./SingleProductPage";
import { useState, useEffect, useContext } from "react";
import Loader from "../Components/Loader";

function Dashboard() {
  let { token, auth, updateAuth, updateToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [data, setdata] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await fetch(
          `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products`
        );
        let json = await response.json();
        //console.log(json);
        setLoading(false);
        setdata(json.data);
      } catch {
        console.log("something went wrong");
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button
          data-testid="logout-btn"
          onClick={() => {
            updateAuth(false);
            updateToken(null);
            navigate("/login");
          }}
        >
          Logout
        </button>
        <p>
          Token:
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {loading && <Loader />}
        <table>
          <tbody>
            {data &&
              data.map((elem) => {
                //console.log(elem);
                let { id, brand, category, price, details } = elem;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>
                      <Link
                        to={`/productpage/${id}`}
                        element={<SingleProductPage />}
                      >
                        {brand}
                      </Link>
                    </td>
                    <td>{category}</td>
                    <td>{price}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
