import TableItem from "./TableItem";
export default function Table(data) {
  return data.map((elem) => {
    return TableItem(elem);
  });
}
