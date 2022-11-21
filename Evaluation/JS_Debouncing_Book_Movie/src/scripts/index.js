showMoney();
function showMoney() {
  let amount = JSON.parse(localStorage.getItem("amount")) || 0;
  document.getElementById("wallet").innerText = amount;
}

document.getElementById("add_to_wallet").addEventListener("click", add2Wallet);
function add2Wallet() {
  let amount = document.getElementById("amount").value;
  document.getElementById("amount").value = "";
  localStorage.setItem("amount", amount);
  showMoney();
}
