import navbar from "./navbar.js";
var page = 1;
var totalPages = 0;
window.onload = () => {
  document.getElementById("navbar").innerHTML = navbar();
  cartCount();
  showData(1);
  document.getElementById("next").addEventListener("click", () => {
    if (page < totalPages) showData(++page);
  });
  document.getElementById("previous").addEventListener("click", () => {
    if (page > 1) showData(--page);
  });
};
function cartCount() {
  document.getElementById("cart-count").innerText =
    localStorage.getItem("cart-count") || 0;
}
async function showData(page, loaded) {
  let data = await fetch(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/?limit=6&page=${page}`
  );
  document.getElementById("page_number").innerText = page;
  data = await data.json();
  totalPages = data.totalPages;
  data = loaded || data.data;
  document.getElementById("sort-lth").addEventListener("click", () => {
    sortlth(data);
  });
  document.getElementById("sort-htl").addEventListener("click", () => {
    sorthtl(data);
  });
  var parent = document.getElementById("main_items");
  parent.innerHTML = "";
  data.forEach((ele) => {
    let container = document.createElement("div");
    container.className = "item";
    let img = document.createElement("img");
    img.src = ele.image;
    let category = document.createElement("p");
    category.innerText = "For " + ele.category;
    let name = document.createElement("h4");
    name.innerText = ele.title;
    let brand = document.createElement("p");
    brand.innerText = "Brand :- " + ele.brand;
    let price = document.createElement("p");
    brand.innerText = ele.price;
    price.className = "price";
    let button = document.createElement("button");
    button.className = "add_to_cart";
    button.addEventListener("click", add2C);
    button.innerText = "Add to Cart";
    container.append(img, category, name, brand, price, button);
    parent.append(container);
  });
}

function add2C() {
  console.log("ok");
}
var Timeouthtl;
function sorthtl(data) {
  console.log("htl");
  if (Timeouthtl) {
    clearTimeout();
  }
  Timeouthtl = setTimeout(debouncehtl, 100, data);
}
function sortlth(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i].price > data[j].price) {
        var temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      }
    }
  }
  //console.log(data);
  showData(1, data);
}
function debouncehtl(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i].price < data[j].price) {
        var temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      }
    }
  }
  showData(1, data);
}
