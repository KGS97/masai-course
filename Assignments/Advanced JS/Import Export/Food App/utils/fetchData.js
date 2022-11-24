export default function (url) {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      getData(data);
    });
}
function getData(data) {
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
