let movies = JSON.parse(localStorage.getItem("movies")) || [];
if (movies.length > 0) {
  showData();
}

function showData() {
  movies.map(function (elem) {
    let container = document.createElement("div");
    container.style.textAlign = "center";
    let poster = document.createElement("img");
    poster.setAttribute("src", elem.poster);

    let name = document.createElement("p");
    name.innerText = elem.name;

    let rating = document.createElement("p");
    rating.innerText = elem.iMDB;
    container.append(poster, name, rating);
    document.getElementById("movies").append(container);
  });
}
