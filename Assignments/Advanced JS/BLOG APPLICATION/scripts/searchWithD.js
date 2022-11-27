let id;
export default function (search) {
  console.log("searchwithD calleds");
  id && clearTimeout(id);
  id = setTimeout(showResults, 250, search);
}
import { showBlogs, getData } from "./getDataUtil.js";
function showResults(search) {
  if (search != "") {
    fetch(`http://localhost:3000/blogs?q=${search}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        showBlogs(data);
      });
  } else {
    getData();
  }
}
