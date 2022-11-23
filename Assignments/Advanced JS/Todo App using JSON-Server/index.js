const PostUrl = "http://localhost:3000/tasks";
reFreshData(1);
let page = 1;
document.getElementById("submit").addEventListener("click", () => {
  event.preventDefault();
  let val = document.getElementById("box").value;
  document.getElementById("box").value = "";
  console.log(val);
  let obj = { task: val, status: false };
  sendRequest("POST", PostUrl, obj);
});

async function sendRequest(method, url = "", data = {}) {
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });
  reFreshData(1);
  return response.json();
}
function reFreshData(page) {
  fetch(`http://localhost:3000/tasks?_page=${page}&_limit=3`)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      if (data.length > 0) {
        showData(data);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
function showData(data) {
  document.querySelector("tbody").innerHTML = "";
  data.forEach((elem) => {
    let tr = document.createElement("tr");
    let td0 = document.createElement("td");
    td0.style.backgroundColor = "white";
    let td1 = document.createElement("td");
    td1.innerText = elem.task;
    td1.className = "task";
    let td2 = document.createElement("td");
    if (elem.status) {
      td2.style.backgroundColor = "Green";
      td2.innerText = "Completed";
    } else {
      td2.style.backgroundColor = "Red";
      td2.innerText = "Due";
    }
    td2.className = "status";
    td2.addEventListener("click", tglStatus);
    td2.style.cursor = "pointer";
    let td3 = document.createElement("td");
    let img = document.createElement("img");
    img.src = "delete.png";
    td3.append(img);
    td3.className = "delete";
    td3.style.backgroundColor = "lightgray";
    td3.addEventListener("click", deleteTask);
    td3.style.cursor = "pointer";
    let td4 = document.createElement("td");
    td4.innerText = elem.id;
    td4.style.display = "none";
    tr.append(td0, td1, td2, td3, td4);
    document.querySelector("tbody").append(tr);
  });
}

function tglStatus() {
  let id = this.parentNode.childNodes[4].innerText;
  fetch(`${PostUrl}/${id}`, { method: "GET" })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      data.status = !data.status;
      sendRequest("PUT", `${PostUrl}/${id}`, data);
    });
}
function deleteTask() {
  let id = this.parentNode.childNodes[4].innerText;
  fetch(`${PostUrl}/${id}`, { method: "DELETE" }).then(() => reFreshData(page));
}
// Simple DELETE request with fetch
document.getElementById("prev").addEventListener("click", pPage);
document.getElementById("next").addEventListener("click", nPage);

function pPage() {
  if (page > 1) {
    console.log(page);
    reFreshData(--page);
  }
}
function nPage() {
  reFreshData(++page);
}
