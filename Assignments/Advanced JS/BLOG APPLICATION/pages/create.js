import getData from "../scripts/getDataUtil.js";
let id = localStorage.getItem("id");

document.querySelector("button").addEventListener("click", postData);

async function postData() {
  let data = {
    title: document.getElementById("title-edit").value,
    body: document.getElementById("body-edit").value,
    author: document.getElementById("author-edit").value,
    gender: document.getElementById("gender-edit").value,
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
// let response = await fetch("http://localhost:3000/blogs", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },

//   body: JSON.stringify(data),
// });
// console.log(response);
