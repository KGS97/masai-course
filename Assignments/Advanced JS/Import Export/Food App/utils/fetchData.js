export default function (q, url) {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      getData(q, data);
    });
}
function getData(q, data) {
  if (q == "rOTD") {
    showrOTD(data.meals[0]);
  }

  data.meals.forEach((ele) => {
    let { strMeal, strMealThumb } = ele;
    showData(strMeal, strMealThumb);
  });
}
function showData(title, thumbnail) {
  document.getElementById("recipe").innerHTML = "";
  let container = document.createElement("div");
  let name = document.createElement("p");
  let img = document.createElement("img");
  img.src = thumbnail;
  name.innerText = title;
  container.append(img, name);
  document.getElementById("recipe").append(container);
}

function showrOTD(data) {}
