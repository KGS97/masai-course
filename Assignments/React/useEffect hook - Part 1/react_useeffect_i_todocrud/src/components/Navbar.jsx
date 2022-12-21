import { createItem } from "./utils/crud";
export default function Navbar() {
  return (
    <i
      className="fa-solid fa-plus"
      onClick={() => {
        createItem(prompt("Enter title", ""));
      }}
    ></i>
  );
}
