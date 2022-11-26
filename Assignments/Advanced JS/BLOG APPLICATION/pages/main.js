import getData from "../scripts/getDataUtil.js";
getData();
import navbar from "../componets/navbar.js";
document.getElementById("nav").innerHTML = navbar();
document.getElementById("create").addEventListener("click", () => {
  window.location.href = "create.html";
});
