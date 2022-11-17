let key = "1a4a5a85110b9e302663e92d7de0dd26";
document.getElementById("search").addEventListener("click", fetchData);
defaultLocation();
function defaultLocation() {
  navigator.geolocation.getCurrentPosition(defaultUI);
}
function defaultUI(pos) {
  let lat = pos.coords.latitude;
  let long = pos.coords.longitude;
  let myPromise =
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}
`);

  myPromise
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      addData(res);
    });
}
function fetchData() {
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
    });
}

function addData(res) {
  city = res.name;
  document
    .querySelector("iframe")
    .setAttribute(
      "src",
      `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    );
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
  foreCast(city);
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
function k2C(num) {
  return num - 273;
}

function foreCast(city) {
  let res = fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`
  );
  res
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      addForeCast(res);
    });
}

function weekDay(num) {
  let days = {
    0: "Monday",
    1: "Tuesday",
    2: "Wednesday",
    3: "Thursday",
    4: "Friday",
    5: "Saturday",
    6: "Sunday",
  };
  return days[num];
}

function addForeCast(res) {
  console.log(res);
  let today = new Date(res.list[0].dt * 1000);
  let todayNum = today.getDay();
  today = weekDay(todayNum);
  let todayp1 = weekDay(todayNum % 7);
  document.getElementById("day1").innerText = todayp1;
  let todayp2 = weekDay((todayNum + 1) % 7);
  document.getElementById("day2").innerText = todayp2;
  let todayp3 = weekDay((todayNum + 2) % 7);
  document.getElementById("day3").innerText = todayp3;
  let todayp4 = weekDay((todayNum + 3) % 7);
  document.getElementById("day4").innerText = todayp4;
  let todayp5 = weekDay((todayNum + 4) % 7);
  document.getElementById("day5").innerText = todayp5;
  let todayp6 = weekDay((todayNum + 5) % 7);
  document.getElementById("day6").innerText = todayp6;

  let todayp1W = res.list[0].weather[0].main;
  document.getElementById("day1W").innerText = todayp1W;
  let todayp2W = res.list[8].weather[0].main;
  document.getElementById("day2W").innerText = todayp2W;
  let todayp3W = res.list[16].weather[0].main;
  document.getElementById("day3W").innerText = todayp3W;
  let todayp4W = res.list[24].weather[0].main;
  document.getElementById("day4W").innerText = todayp4W;
  let todayp5W = res.list[32].weather[0].main;
  document.getElementById("day5W").innerText = todayp5W;
  let todayp6W = res.list[39].weather[0].main;
  document.getElementById("day6W").innerText = todayp6W;
}
