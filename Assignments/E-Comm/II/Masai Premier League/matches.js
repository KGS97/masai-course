// write js code here corresponding to matches.html
let arr = JSON.parse(localStorage.getItem("arr")) || [];
let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
if(arr.length>0){
    showData(arr);
}

function showData(arr) {
    document.querySelector("tbody").innerHTML="";
    arr.map(function(elem,index){
        let tr = document.createElement("tr");
        
        let matchNum =document.createElement('td');
        matchNum.innerText=elem.matchNum;
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
        fav.innerText = "Add to Favourites";
        fav.style.color="green";
        fav.style.cursor="pointer";
        fav.addEventListener('click',add2Fav);
        tr.append(fav);


        document.querySelector("tbody").append(tr);
    })
}

function add2Fav(){
    let target = this.parentNode;
    let obj = {
      matchNum: target.childNodes[0].innerText,
      teamA: target.childNodes[1].innerText,
      teamB: target.childNodes[2].innerText,
      date: target.childNodes[3].innerText,
      venue: target.childNodes[4].innerText,
    };
    // console.log(favourites,obj)
    if(!containsMatch(favourites,obj)){
        favourites.push(obj);
        localStorage.setItem("favourites", JSON.stringify(favourites));   
    }
}

function filter(){
    let val = document.getElementById("filterVenue").value;
    let filtered = arr.filter(function(elem){
        if(val=="none"){
            return true;
        }else{
            return elem.venue == val;
        }

    })
    console.log(filtered);
    showData(filtered);
}

function containsMatch(arr,obj) {
    target = obj.matchNum;
    for(let el of arr){
        if(el.matchNum==target){
            return true;
        }
    }
    return false;
}