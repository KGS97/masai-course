// write js code here corresponding to matches.html
let arr = JSON.parse(localStorage.getItem("arr")) || [];
if(arr.length>0){
    showData(arr);
}

function showData(arr) {
    arr.map(function(elem,index){
        let tr = document.createElement("tr");
        
        let matchNum =document.createElement('td');
        matchNum.innerText=elem.matchNum;
        tr.append(matchNum);

        let teamA = document.createElement("td");
        teamA.innerText = elem.teamA;
        tr.append(teamA);

        let teamB = document.createElement("td");
        teamB.innerText = elem.teamB;
        tr.append(teamB);

        let date = document.createElement("td");
        date.innerText = elem.date;
        tr.append(date);

        let venue = document.createElement("td");
        venue.innerText = elem.venue;
        tr.append(venue);

        let fav = document.createElement("td");
        fav.innerText = "Add to Favourites";
        fav.style.color="green";
        fav.style.cursor="pointer";
        fav.addEventListener('click',add2Fav);
        tr.append(fav);


        document.querySelector("tbody").append(tr);
    })
}

function add2Fav(){
    
}

function filter(){
    let val = document.getElementById("filterVenue").value;
    let filtered = arr.filter(function(elem){
        return elem.venue == val;
    })
    console.log(filtered)
}
