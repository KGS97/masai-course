import navbar from "../components/navbar.js";
import searchBar from "../components/searchBar.js";
import searchWDebouncing from "../utils/searchWDebouncing.js";
document.getElementById("navbar").innerHTML = navbar();
document.getElementById("search").innerHTML = searchBar();
document.getElementById("searchBar").addEventListener("input", () => {
  searchWDebouncing(false);
});
