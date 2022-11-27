import getData from "../scripts/getDataUtil.js";
let id = localStorage.getItem("id");

document.querySelector("button").addEventListener("click", postData);

async function postData() {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = dd + "/" + mm + "/" + yyyy;

  let data = {
    title: document.getElementById("title-edit").value,
    body: document.getElementById("body-edit").value,
    author: document.getElementById("author-edit").value,
    category: document.getElementById("category-edit").value,
    tags: document.getElementById("tag-edit").value,
    created_date: formattedToday,
  };
  fetch("http://localhost:3000/blogs", {
    method: "POST",
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
// let response = await fetch("http://localhost:3000/blogs", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },

//   body: JSON.stringify(data),
// });
// console.log(response);
