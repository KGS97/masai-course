let number = false;
// var myPromise = new Promise((res, rej) => {
//   if (number) {
//     res();
//   }
// });
defaultUI();

function proceed() {
  let num = document.getElementById("input").value;
  loadingUI();
  if (!number) setTimeout(NumberII, 2000, num);
  else {
    setTimeout(otp, 2000, num);
  }
}

function loadingUI() {
  document.getElementById("payment").innerHTML = "";
  let img = document.createElement("img");
  img.setAttribute(
    "src",
    "https://acegif.com/wp-content/uploads/loading-103.gif"
  );
  img.setAttribute("id", "loader");
  document.getElementById("payment").append(img);
}

function defaultUI() {
  document.getElementById("payment").innerHTML = "";
  let input = document.createElement("input");
  let button = document.createElement("button");
  input.setAttribute("type", "text");
  input.setAttribute("id", "input");
  input.setAttribute("placeholder", "Please enter the receiver's phone number");
  button.setAttribute("class", "btn");
  button.setAttribute("id", "proceed");
  button.addEventListener("click", proceed);
  button.innerText = "Proceed";
  document.getElementById("payment").append(input, button);
  if (number) input.setAttribute("placeholder", "Please enter 4 digit otp");
}
function NumberII(num) {
  let myPromise = new Promise((res, rej) => {
    if (num > 999999999) {
      res();
    } else {
      rej();
    }
  });
  myPromise
    .then(() => {
      loadingUI();
      number = true;
      setTimeout(defaultUI, 2000);
    })
    .catch(() => {
      loadingUI();
      setTimeout(tryAgain, 2000);
    });
}
let otpN = false;
function otp(num) {
  if (num == 1234) {
    otpN = true;
    failorSucces();
  } else {
    tryAgain();
  }
}

function tryAgain() {
  document.getElementById("payment").innerHTML = "";
  let image = document.createElement("img");
  image.setAttribute("src", "error.png");
  let p = document.createElement("p");
  if (number && !otpN) {
    p.innerText = "Please enter the correct OTP";
  } else if (!number && !otpN) {
    p.innerText = "Please enter a valid number";
  } else {
    p.innerHTML =
      "Oh, Sorry the payment has failed.<br/>Please try again later.";
  }
  p.style.color = "white";
  document.getElementById("payment").append(image, p);
  setTimeout(defaultUI, 4000);
}
function failorSucces() {
  let x = Math.random() * 10;
  console.log(x);
  if (x > 0) {
    tryAgain();
  } else {
    successUI();
  }
}

function successUI() {
  document.getElementById("payment").innerHTML = "";
  let image = document.createElement("img");
  image.setAttribute("src", "check.jpg");
  let p = document.createElement("p");
  p.innerText = "Congrats! Your payment was successful";
  p.style.color = "white";
  document.getElementById("payment").append(image, p);
}
