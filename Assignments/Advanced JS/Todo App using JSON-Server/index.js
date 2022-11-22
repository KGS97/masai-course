const PostUrl = "http://localhost:3000/tasks";
reFreshData();
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
  reFreshData();
  return response.json();
}
function reFreshData() {
  fetch(PostUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      showData(data);
    });
}
function showData(data) {
  document.querySelector("tbody").innerHTML = "";
  data.forEach((elem) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = elem.task;
    let td2 = document.createElement("td");
    if (elem.status) {
      td2.style.backgroundColor = "Green";
      td2.innerText = "Completed";
    } else {
      td2.style.backgroundColor = "Red";
      td2.innerText = "Due";
    }
    td2.addEventListener("click", tglStatus);
    td2.style.cursor = "pointer";
    let td3 = document.createElement("td");
    td3.innerText = "Delete";
    td3.style.backgroundColor = "red";
    td3.addEventListener("click", deleteTask);
    td3.style.cursor = "pointer";
    let td4 = document.createElement("td");
    td4.innerText = elem.id;
    td4.style.display = "none";
    tr.append(td1, td2, td3, td4);
    document.querySelector("tbody").append(tr);
  });
}

function tglStatus() {
  let id = this.parentNode.childNodes[3].innerText;
  fetch(`${PostUrl}/${id}`, { method: "PATCH" })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.status = !data.status;
      sendRequest("PUT", `${PostUrl}/${id}`, data);
    });
}
function deleteTask() {
  let id = this.parentNode.childNodes[3].innerText;
  fetch(`${PostUrl}/${id}`, { method: "DELETE" }).then(() => reFreshData());
}
// Simple DELETE request with fetch
