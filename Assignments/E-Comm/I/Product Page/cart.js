var cart;
cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = document.createElement("p");
total.setAttribute("id", "subtotal");

showCart();
function showCart() {
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length == 0) {
    emptyCart();
  } else {
    cart.map(function (elem, index) {
      let parentDiv = document.createElement("div");
      parentDiv.setAttribute("class", "itemContainer");

      let descriptionContainer = document.createElement("div");
      let imageContainer = document.createElement("div");
      let img = document.createElement("img");
      img.setAttribute("src", elem.image_url);
      imageContainer.append(img);

      let detailsContainer = document.createElement("div");
      let name = document.createElement("h6");
      name.innerText = elem.name;
      let priceContainer = document.createElement("div");
      let strikedoffprice = document.createElement("p");
      strikedoffprice.innerText = elem.strikedoffprice;
      strikedoffprice.style.textDecoration = "line-through";
      let price = document.createElement("p");
      price.innerText = elem.price;
      priceContainer.append(strikedoffprice, price);
      detailsContainer.append(name, priceContainer);
      descriptionContainer.append(imageContainer, detailsContainer);

      let countContainer = document.createElement("div");
      let increase = document.createElement("button");
      increase.innerText = "+";
      increase.addEventListener("click", increaseCount);
      let decrease = document.createElement("button");
      decrease.innerText = "-";
      decrease.addEventListener("click", decreaseCount);
      let quantity = document.createElement("p");
      quantity.innerText = elem.quantity;
      countContainer.append(decrease, quantity, increase);
      parentDiv.append(descriptionContainer, countContainer);
      document.getElementById("items").append(parentDiv);
    });
    subTotal();
  }
}

function increaseCount() {
  let target = this.parentNode.parentNode.querySelector("h6").innerText;
  cart.map(function (e, i) {
    if (e.name == target) {
      e.quantity++;
      cart[i] = e;
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  });
  refreshCart();
}
function decreaseCount() {
  let target = this.parentNode.parentNode.querySelector("h6").innerText;
  cart.map(function (e, i) {
    if (e.name == target) {
      e.quantity--;
      cart[i] = e;
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  });
  refreshCart();
}

function refreshCart() {
  document.getElementById("items").innerHTML = "";
  remove0s();
  cart = JSON.parse(localStorage.getItem("cart"));
  localStorage.setItem("cart", JSON.stringify(cart));
  cart = JSON.parse(localStorage.getItem(cart));
  showCart();
  subTotal()
}

function emptyCart() {
  h1 = document.createElement("h3");
  h1.style.margin = "10% 5%";
  h1.innerHTML =
    "Oops, Looks like your cart is empty.<br> Let's get <a href='mens.html'>back</a> to shopping. <br> ";
  document.getElementById("items").append(h1);
}

function subTotal() {
  cart = JSON.parse(localStorage.getItem("cart"));
  if (cart.length == 0) {
    document.getElementById("subtotal").remove()
  } else {
    total.style.margin = "auto";
    let sum = 0;
    for (let x of cart) {
      sum += x.price * x.quantity;
    }
    total.innerText = "Subtotal:" + sum;
    document.querySelector("body").append(total);
  }
}

function remove0s() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart = cart.filter(function (elem, index) {
    return elem.quantity > 0;
  });
  localStorage.setItem("cart", JSON.stringify(cart));
}
