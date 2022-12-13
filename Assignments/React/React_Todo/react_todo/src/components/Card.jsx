export default function Card() {
  let style = {
    minHeight: "150px",
    width: "50%",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
    margin: "25px auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  return <div style={style}></div>;
}
