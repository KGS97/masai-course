function Card() {
  let style = {
    height: "150px",
    width: "50%",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
    margin: "25px auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  return (
    <div style={style}>
      <input
        type="text"
        placeholder="Enter Task"
        style={{
          margin: "20px",
          height: "30px",
          borderRadius: "5px",
          border: "1px solid lightgray",
          width: "80%",
          padding: "10px 10px",
        }}
      />
      <button
        style={{
          width: "10%",
          padding: "10px 5px",
          backgroundColor: "#5b04ba",
          color: "white",
          fontFamily: "Ubuntu",
          fontSize: "14px",
          letterSpacing: "1px",
          borderRadius: "5px",
          cursor: "pointer",
          border: "1px solid white",
        }}
      >
        ADD
      </button>
    </div>
  );
}

export default Card;
