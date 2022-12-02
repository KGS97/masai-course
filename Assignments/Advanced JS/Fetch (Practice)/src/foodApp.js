const getCategoriesData = async () => {
  // code here
  let data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
  );
  try {
    data = await data.json();
    console.log(data);
  } catch {
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
  } catch {
    console.log("something went wrong");
  }
  // code here
};

window.onload = function () {
  //  get the buttons here and add click event
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getCategoriesData,
    getIngredientData,
  };
}
