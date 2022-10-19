console.log("ok")
document.querySelector('input[type="submit"]').addEventListener("click",setData)
function setData(){
    event.preventDefault();
    let name = document.querySelector('input[type="text"]').value;
    let mail = document.querySelector('input[type="email"]').value;
    let password = document.querySelector('input[type="password"]').value;
    localStorage.setItem("name",name);
    localStorage.setItem("mail",mail);
    localStorage.setItem("password",password);
}
