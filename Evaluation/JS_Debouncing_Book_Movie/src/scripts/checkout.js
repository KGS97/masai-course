showMoney();
function showMoney() {
  let amount = JSON.parse(localStorage.getItem("amount")) || 0;
  document.getElementById("wallet").innerText = amount;
}
document.getElementById("confirm").addEventListener("click", bookingStatus);
showMovie();
function showMovie() {
  let movie = JSON.parse(localStorage.getItem("movie2bbooked"));
  let { poster, title } = movie;
  let name = document.createElement("h1");
  name.innerText = title;
  let img = document.createElement("img");
  img.src = poster;
  document.getElementById("movie").append(name, img);
}
function bookingStatus() {
  var status = document.getElementById("booking_status");
  let seats = document.getElementById("number_of_seats").value;
  let balance = document.getElementById("wallet").innerText * 1;
  if (balance >= seats * 100) {
    status.innerText = "Booking Successful!";
    balance -= seats * 100;
    document.getElementById("wallet").innerText = balance;
    localStorage.setItem("amount", JSON.stringify(balance));
  } else {
    status.innerText = "Insufficient Balance!";
  }
}
