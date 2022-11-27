export function getData() {
  fetch("http://localhost:3000/blogs")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      showBlogs(data);
    });
}
export default function () {}
export function showBlogs(data) {
  document.querySelector("tbody").innerHTML = "";

  data.forEach((elem) => {
    let { id, title, author, category, created_date, body } = elem;
    let tr = document.createElement("tr");
    let tid = document.createElement("td");
    tid.textContent = created_date;
    let ttitle = document.createElement("td");
    ttitle.textContent = title;
    let tauthor = document.createElement("td");
    tauthor.textContent = author;
    let tgender = document.createElement("td");
    tgender.textContent = category;
    let tbody = document.createElement("td");
    tbody.textContent = body;
    let options = document.createElement("td");
    options.id = "options";
    let img = document.createElement("img");
    img.setAttribute("src", "../icons/edit.png");
    img.addEventListener("click", () => {
      localStorage.setItem("id", id);
      window.location.href = "edit.html";
    });
    options.append(img);
    let deleteimg = document.createElement("img");
    deleteimg.setAttribute("src", "../icons/delete.png");
    deleteimg.addEventListener("click", () => {
      fetch(`http://localhost:3000/blogs/${id}`, {
        method: "DELETE",
      });
    });
    options.append(deleteimg);
    let readimg = document.createElement("img");
    readimg.setAttribute("src", "../icons/read.png");
    readimg.addEventListener("click", () => {
      localStorage.setItem("id", id);
      window.location.href = "view.html";
    });
    options.append(readimg);
    tr.append(tid, ttitle, tbody, tauthor, tgender, options);
    document.getElementById("blogs").append(tr);
  });
}
