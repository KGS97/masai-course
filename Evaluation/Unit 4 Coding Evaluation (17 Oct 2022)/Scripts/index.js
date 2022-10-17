// Write All Home  Page Script Here
var arr=[]

document.querySelector('input[type="submit"]').addEventListener("click",setData);
function setData(){
    event.preventDefault();

    let obj = {};
    let name = document.getElementById("name").value;
    obj["name"]=name;
    let mainActor = document.getElementById("mainActor").value;
    obj["mainActor"]=mainActor;
    let desc = document.getElementById("desc").value;
    obj["desc"]=desc;
    let date = document.getElementById("release").value;
    obj["date"]=date;
    let category = document.getElementById("category").value;
    obj["category"]=category;
    let price = document.getElementById("price").value;
    obj["price"]=price;
    arr.push(obj);
    localStorage.setItem("arr",JSON.stringify(arr));
    console.log(arr);
}