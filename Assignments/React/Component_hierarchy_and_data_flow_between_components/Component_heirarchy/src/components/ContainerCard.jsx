let ContainerCard = () => {
  return (
    <>
      <div style={ContainerStyle()}>
        <h4>Tic Tac Toe</h4>
      </div>
    </>
  );
};

let ContainerStyle = () => {
  let style = {
    fontFamily: "Montserrat",
    boxShadow: "box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
    height: "800px",
    width: "66%",
  };
  return style;
};

export default ContainerCard;
