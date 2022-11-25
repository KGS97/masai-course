function signUp(userName, passWord) {
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: userName, pass: passWord }),
  });
}
async function logIn(userName, passWord) {
  console.log("login");
  let res = await fetch(`http://localhost:3000/users?q=${userName}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
  res.forEach((elem) => {
    if (elem.name == userName && elem.pass == passWord) {
      localStorage.setItem("userName", elem.name);
      localStorage.setItem("logIn", true);
    }
  });
}
export { signUp, logIn };
