const getCategoriesData = async () => {
  // code here
  let data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
  );
  try {
    data = await data.json();
    console.log(data);
  } catch (err) {
    console.log("something went wrong");
  }
};

const getIngredientData = async () => {
  let data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`
  );
  try {
    data = await data.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
  // code here
};

window.onload = function () {
  //  get the buttons here and add click event
  document.querySelector("section").innerHTML = `<button id="get-category-data">
        Get Category Data
      </button>
      <button id="get-ingredient-data">
        Get Ingredient Data
      </button>`;
  document
    .getElementById("get-category-data")
    .addEventListener("click", getCategoriesData);
  document
    .getElementById("get-ingredient-data")
    .addEventListener("click", getIngredientData);
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getCategoriesData,
    getIngredientData,
  };
}
