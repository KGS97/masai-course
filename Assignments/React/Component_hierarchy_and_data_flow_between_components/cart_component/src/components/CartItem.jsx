import Quantity from "./Quantity";
function CartItem(...props) {
  let [Increase, Decrease, CartList, elem, index] = props;
  //console.log(CartList);
  return (
    <div style={CartItemContainerStyle()}>
      <p>{elem.name}</p>
      <p>₹ {elem.price}</p>
      <div>{Quantity(Increase, Decrease, elem.quantity, index)}</div>
    </div>
  );
}
export default CartItem;
function CartItemContainerStyle() {
  let style = {
    border: "1px solid orange",
    borderRadius: "5px",
    height: "100px",
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 25px",
    margin: "5px auto",
    alignItems: "center",
    fontWeight: "300",
    fontSize: "36px",
    color: "tomato",
  };
  return style;
}
