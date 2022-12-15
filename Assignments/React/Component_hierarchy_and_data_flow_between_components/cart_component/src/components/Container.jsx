import CartItem from "./CartItem";
function Container(...props) {
  let [Increase, Decrease, CartList, Total] = props;
  return (
    <div style={ContainerStyle()}>
      {CartList.map((elem, index) => {
        return CartItem(Increase, Decrease, CartList, elem, index);
      })}
      <h4 style={TotalStyle()}>Total : {Total}</h4>
    </div>
  );
}
function ContainerStyle() {
  let style = {
    height: "500px",
    width: "50%",
    border: "5px solid orange",
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
    borderRadius: "5px",
  };
  return style;
}

function TotalStyle() {
  let style = { fontSize: "32px", fontWeight: "200" };
  return style;
}
export default Container;
