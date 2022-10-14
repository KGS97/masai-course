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
    let td2 = document.createElement("tr");
    td2.innerText=batch;
    let td3 = document.createElement("tr");
    td3.innerText=dsa;
    let td4 = document.createElement("tr");
    td4.innerText=skill;
    let td5 = document.createElement("tr");
    td5.innerText=coding;

}

