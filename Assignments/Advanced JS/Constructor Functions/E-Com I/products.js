let Products = JSON.parse(localStorage.getItem("Products")) || [];
// localStorage.clear();
if (Products.length > 0) {
  showData(Products);
}

function showData(arr) {
  document.getElementById("products").innerHTML = "";
  arr.map(function (elem) {
    let parentDiv = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", elem.image);
    img.setAttribute("height", "200px");
    let name = document.createElement("p");
    name.innerText = elem.name;
    let remove = document.createElement("button");
    remove.setAttribute("id", "remove");
    remove.innerText = "Remove";
    remove.addEventListener("click", removeItem);
    let sold = document.createElement("button");
    sold.setAttribute("id", "sold");
    sold.innerText = "Sold";
    sold.addEventListener("click", soldToggle);
    if (elem.sold == "false") {
      sold.style.backgroundColor = "Green";
    } else {
      sold.style.backgroundColor = "Red";
    }
    parentDiv.append(img, name, remove, sold);
    document.getElementById("products").append(parentDiv);
  });
  let count = document.createElement("h3");
  count.innerText = Products.length;
  document.getElementById("products").append(count);
}
function soldToggle() {
  let name = this.parentNode.childNodes[1].innerText;
  Products.map(function (elem) {
    if (elem.name == name && elem.sold == "true") {
      elem.sold = "false";
    } else if (elem.name == name) {
      elem.sold = "true";
    }
  });
  localStorage.setItem("Products", JSON.stringify(Products));
  showData(JSON.parse(localStorage.getItem("Products")));
}

function removeItem() {
  let name = this.parentNode.childNodes[1].innerText;
  Products.map(function (elem, index) {
    if (elem.name == name) Products.splice(index, 1);
  });
  localStorage.setItem("Products", JSON.stringify(Products));
  showData(JSON.parse(localStorage.getItem("Products")));
}
