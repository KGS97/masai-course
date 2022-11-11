function setData() {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let contact = document.getElementById("contact").value;
  let email = document.getElementById("mail").value;
  let password = document.getElementById("password").value;
  if (name == "" || contact == "" || email == "" || password == "") {
    alert("Please enter valid credentials");
    return;
  }
  document.getElementById("name").value = "";
  document.getElementById("contact").value = "";
  document.getElementById("mail").value = "";
  document.getElementById("password").value = "";
  let obj = {
    name: name,
    contact: contact,
    email: email,
    password: password,
  };
  localStorage.setItem("user", JSON.stringify(obj));
  location.href = "login.html";
}

document.getElementById("btn").addEventListener("click", setData);
