export default searchWithD;
import fetchData from "./fetchData.js";
var id;
function searchWithD(url) {
  id = null;
  id = setTimeout(fetchData(url), 1000);
}
