// write js code here corresponding to index.html
// You should add submit event on the form
let arr = JSON.parse(localStorage.getItem("schedule")) || [];

document.getElementById("masaiForm").addEventListener('submit',setData);

function setData(){
    event.preventDefault();
    let obj = {};
    let matchNum = document.getElementById("matchNum").value;
    obj.matchNum = matchNum;
    let teamA = document.getElementById("teamA").value;
    obj.teamA = teamA;
    let teamB = document.getElementById("teamB").value;
    obj.teamB = teamB;
    let date = document.getElementById("date").value;
    obj.date = date;
    let venue = document.getElementById("venue").value;
    obj.venue = venue;
    
    arr.push(obj);
    localStorage.setItem("arr", JSON.stringify(arr));
    console.log(arr)
}
