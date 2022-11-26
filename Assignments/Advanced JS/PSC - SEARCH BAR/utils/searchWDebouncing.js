let id;
export default function (request, search) {
  id && clearTimeout(id);
  id = setTimeout(() => {
    fetchData(request, search);
  }, 200);
}

function fetchData(request, search) {
  if (request) {
    fetchUNR(search);
  } else {
    fetchUsers(search);
  }
}
import fetchUNR from "./fetchUNR.js";
import fetchUsers from "./fetchUsers.js";
