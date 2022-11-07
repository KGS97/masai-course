let Products = JSON.parse(localStorage.getItem("Products")) || [];
document.querySelector("form").addEventListener("click", addData);
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
}
