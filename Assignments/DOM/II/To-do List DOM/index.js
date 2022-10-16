document.querySelector('input[type="submit"]').addEventListener('click',captureData)
function captureData(){
    event.preventDefault()
    let task = document.getElementById("task").value;
    let priority = document.getElementById("priority").value;
    // console.log(task, priority)
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    td1.innerText=task;
    let td2 = document.createElement("td")
    td2.innerText=priority;
    if(priority=="High"){
        td2.style.backgroundColor="red"
    }else{
        td2.style.backgroundColor="green"
    }
    let td3 = document.createElement("td")
    td3.innerText="Delete"
    td3.style.color="red"
    td3.addEventListener('click',deleteRow)
    function deleteRow(){
        event.target.parentNode.remove();

    }

    tr.append(td1,td2,td3)
    document.querySelector("tbody").append(tr)
}

