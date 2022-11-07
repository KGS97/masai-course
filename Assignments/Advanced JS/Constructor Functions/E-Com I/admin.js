let Products = JSON.parse(localStorage.getItem("Products")) || [];
document.querySelector("#add").addEventListener("click", addData);
function addData() {
  event.preventDefault();
  let obj = {
    name: document.getElementById("name").value,
    category: document.getElementById("category").value,
    image: document.getElementById("image").value,
    price: document.getElementById("price").value,
    gender: document.getElementById("gender").value,
    sold: document.getElementById("sold").value,
  };
  Products.push(obj);
  localStorage.setItem("Products", JSON.stringify(Products));
  document.getElementById("name").value = "";
  document.getElementById("category").value = "";
  document.getElementById("image").value = "";
  document.getElementById("price").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("sold").value = "false";
}
