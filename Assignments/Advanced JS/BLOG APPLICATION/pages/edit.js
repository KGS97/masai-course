import getData from "../scripts/getDataUtil.js";
let id = localStorage.getItem("id");
async function showBlog() {
  console.log(id);
  let data = await fetch(`http://localhost:3000/blogs/${id}`).then((res) => {
    return res.json();
  });
  console.log(data);
  let { title, body, author, category, tags } = data;
  document.getElementById("title-edit").value = title;
  document.getElementById("body-edit").value = body;
  document.getElementById("author-edit").value = author;
  document.getElementById("category-edit").value = category;
  document.getElementById("tag-edit").value = tags;
}
showBlog();
document.querySelector("button").addEventListener("click", putData);

function putData() {
  let data = {
    title: document.getElementById("title-edit").value,
    body: document.getElementById("body-edit").value,
    author: document.getElementById("author-edit").value,
    category: document.getElementById("category-edit").value,
    tags: document.getElementById("tag-edit").value,
  };

  fetch(`http://localhost:3000/blogs/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(() => {
    window.location.href = "main.html";
  });
}
import navbar from "../componets/navbar.js";
document.getElementById("nav").innerHTML = navbar();
import blogPost from "../componets/blogPost.js";
document.getElementById("form").innerHTML = blogPost();
