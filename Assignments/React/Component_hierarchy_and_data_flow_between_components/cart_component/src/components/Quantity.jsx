function Quantity(...props) {
  //console.log(props);
  let [Increase, Decrease, quantity, index] = props;
  return (
    <div style={QuantityStyle()}>
      <button
        style={buttonStyle()}
        onClick={() => {
          Decrease(index);
        }}
      >
        -
      </button>
      <p>{quantity}</p>
      <button
        style={buttonStyle()}
        onClick={() => {
          Increase(index);
        }}
      >
        +
      </button>
    </div>
  );
}
export default Quantity;

function buttonStyle() {
  let style = {
    background: "white",
    borderRadius: "2px",
    fontFamily: "Georgia",
    color: "tomato",
    fontSize: "16px",
    border: "solid tomato 1px",
    textDecoration: "none",
    height: "25px",
    widht: "40px",
    cursor: "pointer",
  };
  return style;
}
function QuantityStyle() {
  let style = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100px",
  };
  return style;
}
