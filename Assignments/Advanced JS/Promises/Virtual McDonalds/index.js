let x = 3;
document.querySelector(".btn").addEventListener("click", fulfillOrder);

function fulfillOrder() {
  // console.log("ok");
  let myPromise = new Promise((res, rej) => {
    setTimeout(res, 5000);
  });
  myPromise.then(() => {
    alert("Your order has been fulfilled");
  });
}
