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
  } else {
    data.meals.forEach((ele) => {
      let { strMeal, strMealThumb } = ele;
      showData(strMeal, strMealThumb);
    });
  }
}
function showData(title, thumbnail) {
  document.getElementById("recipe").innerHTML = "";
  let container = document.createElement("div");
  let name = document.createElement("h4");
  let img = document.createElement("img");
  img.src = thumbnail;
  name.innerText = title;
  container.append(img, name);
  document.getElementById("recipe").append(container);
}

function showrOTD(data) {
  console.log(data);
  let { strMeal, strMealThumb, strInstructions } = data;
  showData(strMeal, strMealThumb);
  for (let i = 1; i <= 20; i++) {
    let ingredient = data[`strIngredient${i}`];
    let quantity = data[`strMeasure${i}`];
    if (ingredient == "" || quantity == " ") break;
    else {
      let tr0 = document.createElement("tr");
      let tr1 = document.createElement("td");
      tr1.innerText = ingredient;
      let tr2 = document.createElement("td");
      tr2.innerText = quantity;
      tr0.append(tr1, tr2);
      document.querySelector("tbody").append(tr0);
    }
  }
  let instructions = document.createElement("p");
  instructions.innerText = strInstructions;
  document.getElementById("instructions").append(instructions);
}
