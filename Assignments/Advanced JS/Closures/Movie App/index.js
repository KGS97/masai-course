let key = "241ba2ba";
function search() {
  let title = document.querySelector("input").value;
  fetch(`http://www.omdbapi.com/?apikey=${key}&s=${title}
`)
    .then((result) => {
      return result.json();
    })
    .then((jsonData) => {
      addData(jsonData);
    });
}
var id;
function debounce() {
  if (id != undefined) {
    clearTimeout(id);
  }
  id = setTimeout(search, 250);
}

function addData(results) {
  console.log(results);
  if (!results.Error) {
    document.getElementById("results").innerHTML = "";
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let th = document.createElement("th");
    th.innerText = "Poster";
    thead.append(th);
    let th1 = document.createElement("th");
    th1.innerText = "Release Date";
    thead.append(th1);
    let th2 = document.createElement("th");
    th2.innerText = "IMDB Rating";
    thead.append(th2);
    let th3 = document.createElement("th");
    th3.innerText = "Cast";
    thead.append(th3);
    table.append(thead);
    document.getElementById("results").append(table);
    let arr = results.Search;
    arr.forEach((elem) => {
      console.log(elem);
    });
  }
}
