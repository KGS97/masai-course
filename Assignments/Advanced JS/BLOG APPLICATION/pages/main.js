import { getData } from "../scripts/getDataUtil.js";
getData();
import navbar from "../componets/navbar.js";
document.getElementById("nav").innerHTML = navbar();
document.getElementById("searchBar").addEventListener("input", () => {
  searchWithD(document.getElementById("searchBar").value);
});
import searchWithD from "../scripts/searchWithD.js";
