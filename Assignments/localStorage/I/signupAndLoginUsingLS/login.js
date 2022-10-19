var name = localStorage.getItem("name");
var mail = localStorage.getItem("mail");
var password = localStorage.getItem("password");

document.querySelector('input[type="submit"]').addEventListener('click',getItems);
function getItems(){
    var mailb = document.querySelector('input[type="email"]').value;
    var passwordb = document.querySelector('input[type="password"]').value;
    if(mail == mailb && password==passwordb){
        alert("You've logged in successfully.");

    }else{
        alert("Enterred email/password was wrong.");
    }
}