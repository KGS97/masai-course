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
    th1.innerText = "Year of Release";
    th1.setAttribute("class", "yor");
    thead.append(th1);
    let th2 = document.createElement("th");
    th2.innerText = "IMDB Rating";
    th2.setAttribute("class", "yor");
    thead.append(th2);
    let th3 = document.createElement("th");
    th3.innerText = "Cast";
    thead.append(th3);
    table.append(thead);
    document.getElementById("results").append(table);
    let arr = results.Search;
    let tbody = document.createElement("tbody");
    arr.forEach((elem) => {
      let td3 = document.createElement("td");
      let td4 = document.createElement("td4");
      fetch(`http://www.omdbapi.com/?apikey=${key}&t=${elem.Title}
`)
        .then(function (res) {
          return res.json();
        })
        .then(function (jsonData) {
          console.log(jsonData);
          td3.innerText = jsonData.Ratings[0].Value;
          td4.innerText = jsonData.Actors;
        });

      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      let poster = document.createElement("img");
      if (elem.Poster != "N/A") {
        poster.setAttribute("src", elem.Poster);
      } else {
        poster.setAttribute("alt", elem.Poster);
      }
      td1.append(poster);
      let td2 = document.createElement("td");
      td2.innerText = elem.Year;

      tr.append(td1, td2, td3, td4);
      tbody.append(tr);
    });
    document.querySelector("table").append(tbody);
  }
}
