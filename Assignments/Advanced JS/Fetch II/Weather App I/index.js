document.getElementById("search").addEventListener("click", fetchData);
function fetchData() {
  let key = "1a4a5a85110b9e302663e92d7de0dd26";
  let city = document.getElementById("city").value;
  let res = fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      key
  );
  res
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      addData(res);
      console.log(res);
    });
  document
    .querySelector("iframe")
    .setAttribute(
      "src",
      `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    );
}

function addData(res) {
  // let temp = k2C(roundUporDown(res.main.temp));
  let min = k2C(roundUporDown(res.main.temp_min));
  document.getElementById("min").innerText = min;
  let max = k2C(roundUporDown(res.main.temp_max));
  document.getElementById("max").innerText = max;
  let sunrise = utc2HHMM(res.sys.sunrise);
  document.getElementById("sunrise").innerText = sunrise;
  let sunset = utc2HHMM(res.sys.sunset);
  document.getElementById("sunset").innerText = sunset;
  let air = res.wind.speed + " m/s";
  document.getElementById("air").innerText = air;
  let clouds = res.clouds.all + "%";
  document.getElementById("clouds").innerText = clouds;
  // console.log(document.getElementById("clouds"));
}
function utc2HHMM(time) {
  var date = new Date(time * 1000);
  var hours = "0" + date.getHours();
  var minutes = "0" + date.getMinutes();
  return hours.substr(-2) + ":" + minutes.substr(-2);
}

function roundUporDown(num) {
  if (num % 1 > 0.5) {
    return Math.ceil(num);
  } else {
    return Math.floor(num);
  }
}
// dt = new Date(1234567890 * 1000).toLocaleString();
// console.log(dt);
function k2C(num) {
  return num - 273;
}
