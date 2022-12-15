import Container from "./Container";
import { useState } from "react";

function Cart() {
  let [CartList, UpdateCartList] = useState([
    { name: "Noodles", price: "30", quantity: 0 },
    { name: "Biryani", price: "90", quantity: 0 },
    { name: "Chips", price: "10", quantity: 0 },
  ]);
  let Increase = (index) => {
    //console.log(index);
    CartList[index].quantity += 1;
    UpdateStates();
  };
  let Decrease = (index) => {
    //console.log(index);
    if (CartList[index].quantity > 0) {
      CartList[index].quantity -= 1;
      UpdateStates();
    }
  };

  let UpdateStates = () => {
    UpdateCartList([...CartList]);
    let sum = CartList.reduce((sum, elem) => {
      return sum + elem.price * elem.quantity;
    }, 0);
    console.log(sum);
    UpdateTotal(sum);
  };
  let [Total, UpdateTotal] = useState(0);
  return <>{Container(Increase, Decrease, CartList, Total)}</>;
}
export default Cart;
