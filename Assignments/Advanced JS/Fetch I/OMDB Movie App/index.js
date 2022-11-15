let key = "241ba2ba";
document.querySelector("button").addEventListener("click", fetchData);
function fetchData() {
  document.getElementById("movies").innerHTML = "";
  let search = document.querySelector("input").value;
  fetch("http://www.omdbapi.com/?apikey=" + key + "&t=" + search)
    .then(function (response) {
      return response.json();
    })
    .then(function (res) {
      console.log(res);
      if (res.Response == "False") {
        unFound(search);
      } else {
        showMovie(res);
      }
    })
    .catch(function (res) {
      console.log(res.Error);
    });
}

function showMovie(res) {
  let img = document.createElement("img");
  img.setAttribute("src", res.Poster);
  let h4 = document.createElement("h4");
  h4.innerText = res.Title;
  console.log(h4);
  let actors = document.createElement("p");
  actors.innerText = res.Actors;
  document.getElementById("movies").append(img, h4, actors);
}
function unFound(search) {
  let h4 = document.createElement("h4");
  h4.innerText = "Sorry " + search + " couldn't be found";
  document.getElementById("movies").append(h4);
}
// Actors
// :
// "Michael Keaton, Jack Nicholson, Kim Basinger"
// Awards
// :
// "Won 1 Oscar. 10 wins & 26 nominations total"
// BoxOffice
// :
// "$251,409,241"
// Country
// :
// "United States, United Kingdom"
// DVD
// :
// "22 Aug 1997"
// Director
// :
// "Tim Burton"
// Genre
// :
// "Action, Adventure"
// Language
// :
// "English, French, Spanish"
// Metascore
// :
// "69"
// Plot
// :
// "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker."
// Poster
// :
// "https://m.media-amazon.com/images/M/MV5BZDNjOGNhN2UtNmNhMC00YjU4LWEzMmUtNzRkM2RjN2RiMjc5XkEyXkFqcGdeQXVyMTU0OTM5ODc1._V1_SX300.jpg"
// Production
// :
// "N/A"
// Rated
// :
// "PG-13"
// Ratings
// :
// (3) [{…}, {…}, {…}]
// Released
// :
// "23 Jun 1989"
// Response
// :
// "True"
// Runtime
// :
// "126 min"
// Title
// :
// "Batman"
// Type
// :
// "movie"
// Website
// :
// "N/A"
// Writer
// :
// "Bob Kane, Sam Hamm, Warren Skaaren"
// Year
// :
// "1989"
// imdbID
// :
// "tt0096895"
// imdbRating
// :
// "7.5"
// imdbVotes
// :
// "377,345"
