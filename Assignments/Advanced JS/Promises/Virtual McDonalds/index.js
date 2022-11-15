let x = 3;
document.querySelector(".btn").addEventListener("click", fulfillOrder);
let myPromise = new Promise(function (res, rej) {
  if (x % 2 == 0) {
    res();
  }
});

function fulfillOrder() {
  setTimeout(function () {
    x = 2;
  }, 5000);
}

myPromise.then(() => {
  orderFulfilled();
  console.log(myPromise);
});
function orderFulfilled() {
  console.log("ok");
}

console.log(myPromise);
