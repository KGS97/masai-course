let movies = JSON.parse(localStorage.getItem("movies")) || [];
if (movies.length > 0) {
  showData(movies);
}

function showData(movies) {
  document.getElementById("movies").innerHTML = "";
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
document.getElementById("htl").addEventListener("click", htl);
function htl() {
  for (let i = 0; i < movies.length - 1; i++) {
    let max = i;
    for (let j = i + 1; j < movies.length; j++) {
      if (movies[i].iMDB < movies[j].iMDB) {
        max = j;
      }
    }
    let temp = movies[i];
    movies[i] = movies[max];
    movies[max] = temp;
  }
  showData(movies);
}
document.getElementById("lth").addEventListener("click", lth);
function lth() {
  for (let i = 0; i < movies.length - 1; i++) {
    let max = i;
    for (let j = i + 1; j < movies.length; j++) {
      if (movies[i].iMDB > movies[j].iMDB) {
        max = j;
      }
    }
    let temp = movies[i];
    movies[i] = movies[max];
    movies[max] = temp;
  }
  showData(movies);
}
let images = [
  "https://www.w3schools.com/howto/img_nature_wide.jpg",
  "https://www.w3schools.com/howto/img_snow_wide.jpg",
  "https://www.w3schools.com/howto/img_lights_wide.jpg",
  "https://www.w3schools.com/howto/img_mountains_wide.jpg",
];
let img = document.createElement("img");
img.style.width = "100%";
img.style.height = "350px";
img.setAttribute("src", images[0]);
img.setAttribute("id", "imageonDisplay");
document.getElementById("slideshow").append(img);
setTimeout(setInterval(changeImg, 5000), 0);
function changeImg() {
  document.getElementById("slideshow").innerHTML = "";
  let x = Math.floor(Math.random() * images.length);
  let img = document.createElement("img");
  img.style.width = "100%";
  img.style.height = "350px";
  img.setAttribute("src", images[x]);
  img.setAttribute("id", "imageonDisplay");
  document.getElementById("slideshow").append(img);
}
