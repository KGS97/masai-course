let key = "5d13dca7a01151d9b32157e5fa35531a";
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}`)
  .then((res) => {
    return res.json();
  })
  .then((jsonData) => {
    addData(jsonData);
  });

function addData(jsonData) {
  let arr = jsonData.results;
  console.log(arr);
  arr.forEach((elem, i) => {
    let container = document.createElement("div");
    container.setAttribute("class", "container");
    let img = document.createElement("img");
    let poster_path = `https://image.tmdb.org/t/p/w300/${jsonData.results[i].poster_path}`;
    img.setAttribute("src", poster_path);
    let title = document.createElement("p");
    title.innerText = elem.title;
    let rating = document.createElement("p");
    rating.innerText = elem.vote_average + "⭐";
    let votes = document.createElement("p");
    votes.innerText = "Votes : " + elem.vote_count;
    container.append(img, title, rating, votes);
    document.querySelector("#movies").append(container);
  });
}
