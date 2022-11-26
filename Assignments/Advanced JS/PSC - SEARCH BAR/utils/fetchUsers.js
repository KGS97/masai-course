export default function (q) {
  console.log("fetchUsers called");
  fetch(`  https://api.github.com/search/users?q=${q}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      showUsers(data.items);
    });
}

function showUsers(data) {
  data.forEach((elem) => {
    console.log(elem);
    let { avatar_url, html_url } = elem;
    let resContainer = document.createElement("div");
    resContainer.className = "resContainer";
    let avatar = document.createElement("img");
    avatar.src = avatar_url;
    let link = document.createElement("button");
    link.textContent = "View on Github";
    link.addEventListener("click", () => {
      window.location.href = html_url;
    });
    resContainer.append(avatar, link);
    document.getElementById("results").append(resContainer);
  });
}
