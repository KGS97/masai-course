document.getElementById("submit_btn").addEventListener("click",getInfo);
function getInfo(){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let batch = document.getElementById("batch").value;
    let dsa = document.getElementById("dsa").value;
    let skill = document.getElementById("cs").value;
    let coding = document.getElementById("coding").value;
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText=name;
    let td2 = document.createElement("td");
    td2.innerText=batch;
    let td3 = document.createElement("td");
    td3.innerText=dsa;
    let td4 = document.createElement("td");
    td4.innerText=skill;
    let td5 = document.createElement("td");
    td5.innerText=coding;
    tr.append(td1,td2,td3,td4,td5)
    document.querySelector("tbody").append(tr)
    
}

