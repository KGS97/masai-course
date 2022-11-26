export default function (q) {
  if (q != "") {
    fetch(`https://api.github.com/users/${q}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        showUser(data);
      });
  }
}
function showUser(data) {
  document.getElementById("user").innerHTML = "";
  let { name, location, company, repos_url, avatar_url } = data;
  // console.log("showUser called", data);
  let container = document.createElement("div");
  container.className = "container";
  let avatar = document.createElement("img");
  avatar.src = avatar_url;

  let title = document.createElement("h2");
  title.innerText = "Name : " + name;

  let org = document.createElement("h4");
  org.innerText = "Organisation : " + company;

  let located = document.createElement("h6");
  located.innerText = "Location : " + location;

  container.append(avatar, title, org, located);
  document.getElementById("user").append(container);
  showRepos(repos_url);
}
async function showRepos(repos_url) {
  let data = await fetch(`${repos_url}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
  let heading = document.createElement("h2");
  heading.innerText = "Repositories :";
  document.getElementById("repos-heading");
  document.getElementById("repos").append(heading);
  data.forEach((elem) => {
    let { html_url, name } = elem;
    let repoContainer = document.createElement("div");
    repoContainer.className = "repoContainer";
    let link = document.createElement("button");
    link.textContent = "View on Github";
    link.addEventListener("click", () => {
      window.location.href = html_url;
    });
    let title = document.createElement("p");
    title.innerText = name;
    repoContainer.append(title, link);
    document.getElementById("repos").append(repoContainer);
  });
}
