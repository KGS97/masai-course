const key = "241ba2ba";
showMoney();
function showMoney() {
  let amount = JSON.parse(localStorage.getItem("amount")) || 0;
  document.getElementById("wallet").innerText = amount;
}

document.getElementById("search").addEventListener("input", fetchwDebouncing);
var id;
function fetchwDebouncing() {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(showRes, 1000);
}
function showRes() {
  let search = document.getElementById("search").value;
  console.log(search);
  fetch(`https://www.omdbapi.com/?s=${search}&page=1&apikey=${key}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      showMovies(data);
    });
}

function showMovies(data) {
  let arr = data.Search;
  arr.forEach((elem) => {
    let container = document.createElement("div");
    container.className = "movie_tab";
    let poster = document.createElement("img");
    poster.src = elem.Poster;
    poster.style.width = "100%";
    poster.style.height = "80%";
    let title = document.createElement("p");
    title.innerText = elem.Title;
    let button = document.createElement("button");
    button.innerText = "Book Now";
    button.className = "book_now";
    button.addEventListener("click", () => {
      console.log(elem.Poster);
      console.log(elem.Title);
      //setNRed(elem.Poster, elem.Title);
    });
    container.append(poster, title, button);
    document.getElementById("movies").append(container);
  });
}

function setNRed(poster, title) {
  let obj = {
    poster: poster,
    title: title,
  };
  localStorage.setItem("movie2bbooked", JSON.stringify(obj));
  window.location.href = "checkout.html";
}
