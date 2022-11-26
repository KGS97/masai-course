async function showBlog() {
  let id = localStorage.getItem("id");
  let data = await fetch(`http://localhost:3000/blogs/${id}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
  console.log(data);
  let { title, author, body } = data;
  let t = document.createElement("h4");
  t.textContent = title;
  let a = document.createElement("h4");
  a.textContent = author;
  let b = document.createElement("p");
  b.textContent = body;
  document.body.append(t, a, b);
}
showBlog();
import navbar from "../componets/navbar.js";
document.getElementById("nav").innerHTML = navbar();
