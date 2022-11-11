let user = JSON.parse(localStorage.getItem("user"));
if (user == null) {
  alert("Please sign up first");
  location.href = "signup.html";
} else {
  document.getElementById("btn").addEventListener("click", logIn);
}

function logIn() {
  event.preventDefault();
  let email = document.getElementById("mail").value;
  let pass = document.getElementById("password").value;
  if (email == user.email && pass == user.password) {
    alert("You've logged in successfully");
    location.href = "index.html";
    console.log("ok");
  }
}
