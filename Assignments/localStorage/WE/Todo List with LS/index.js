
var arr = JSON.parse(localStorage.getItem("arr")) || [];
function getData(arr) {
    for(var i=0;i<arr.length;i++){
        var target = arr[i];
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.innerText=target.task;
        var td2 = document.createElement("td");
        td2.innerText=target.priority;
        if(target.priority=="High"){
            td2.style.backgroundColor="Red";
        }else{
            td2.style.backgroundColor="Green";
        }
        var td3 = document.createElement("td");
        td3.innerText="Delete";
        td3.style.color="red"
        td3.addEventListener('click',dLT)
        tr.append(td1,td2,td3);
        document.querySelector("tbody").append(tr);
    }
}
if(arr.length>0){
    getData(arr);
}
document.querySelector('input[type="submit"]').addEventListener('click',setData)
function setData() {
    event.preventDefault()
    var task = document.getElementById("task").value;
    var priority = document.getElementById("priority").value;
    var obj = {task:task, priority:priority}
    arr.push(obj);
    localStorage.setItem("arr",JSON.stringify(arr))
    location.reload();
}

function dLT() {
    var arr = JSON.parse(localStorage.getItem("arr"));
    arr.splice(this.parentNode.rowIndex-1,1)
    localStorage.setItem("arr",JSON.stringify(arr));
    location.reload();
}

