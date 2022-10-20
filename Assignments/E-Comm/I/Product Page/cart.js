var cart = JSON.parse(localStorage.getItem('cart')) || [];

if(cart.length==0){
    h1=document.createElement('h3');
    h1.style.margin="10% 5%"
    h1.innerHTML = "Oops, Looks like your cart is empty.<br> Let's get <a href='mens.html'>back</a> to shopping. <br> "
    document.getElementById("items").append(h1);
}
showCart()
function showCart(){
    for(const x of cart){
        x
    }
}