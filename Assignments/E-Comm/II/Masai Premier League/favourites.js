// write js code here corresponding to favourites.html
let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
if(favourites.length>0){
    showData(favourites);
}

function showData(arr) {
    // console.log(favourites.length);
    document.querySelector("tbody").innerHTML = "";
    arr.map(function (elem, index) {
    let tr = document.createElement("tr");

    let matchNum = document.createElement("td");
    matchNum.innerText = elem.matchNum;
    matchNum.setAttribute("id", "matchNum");
    tr.append(matchNum);

    let teamA = document.createElement("td");
    teamA.innerText = elem.teamA;
    teamA.setAttribute("id", "teamA");
    tr.append(teamA);

    let teamB = document.createElement("td");
    teamB.innerText = elem.teamB;
    teamB.setAttribute("id", "teamB");
    tr.append(teamB);

    let date = document.createElement("td");
    date.innerText = elem.date;
    date.setAttribute("id", "date");
    tr.append(date);

    let venue = document.createElement("td");
    venue.innerText = elem.venue;
    venue.setAttribute("id", "venue");
    tr.append(venue);

    let fav = document.createElement("td");
    fav.innerText = "Delete";
    fav.style.color = "red";
    fav.style.cursor = "pointer";
    fav.addEventListener("click", deleteRow);
    tr.append(fav);

    document.querySelector("tbody").append(tr);
  });
}

function deleteRow() {
    let matchNum=this.parentNode.childNodes[0].innerText;
    favourites = favourites.filter(function(elem){
        if(elem.matchNum!=matchNum){
            return true
        }
    })
    localStorage.setItem("favourites",JSON.stringify(favourites)); 
    showData(favourites);     
}