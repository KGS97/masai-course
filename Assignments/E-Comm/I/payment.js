document.querySelector("h3").innerText = localStorage.getItem('total');
document.querySelector('input[type="submit"]').addEventListener('click',checkData)
function checkData() {
    event.preventDefault()
    let cardNumber = document.querySelector('input[placeholder="Enter your card number"]').value;
    let cvv = document.querySelector('input[placeholder="Enter CVV number on your card"]').value;
    let expiry = document.querySelector('input[placeholder="Enter expiry date of aforementioned Card"]').value;
    let arr = expiry.split('-');
    if (
      cardNumber !== '4242424242424242' ||
      cvv != '123' ||
      arr[0] != '2022' ||
      arr[1] != '01'
    ) {
      alert("Please enter correct credentials");
    }  else {
      window.location.replace("otp.html");
    }
}