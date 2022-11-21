showMoney();
function showMoney() {
  let amount = JSON.parse(localStorage.getItem("amount")) || 0;
  document.getElementById("wallet").innerText = amount;
}

document.getElementById("add_to_wallet").addEventListener("click", add2Wallet);
function add2Wallet() {
  let amount =
    document.getElementById("amount").value * 1 +
    document.getElementById("wallet").innerText * 1;
  document.getElementById("amount").value = "";

  localStorage.setItem("amount", amount);
  showMoney();
}
document.getElementById("book_movies").addEventListener("click", redirect);
function redirect() {
  window.location.href = "movies.html";
}
