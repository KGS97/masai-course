var cart = JSON.parse(localStorage.getItem('cart')) || [];
let total = document.createElement('p')
total.setAttribute('id','subtotal')
if(cart.length==0){
    h1=document.createElement('h3');
    h1.style.margin="10% 5%"
    h1.innerHTML = "Oops, Looks like your cart is empty.<br> Let's get <a href='mens.html'>back</a> to shopping. <br> "
    document.getElementById("items").append(h1);
    document.getElementById('subtotal').remove()
}else{
    showCart()
function showCart(){
    for(const x of cart){
        let parentDiv = document.createElement("div");
        parentDiv.setAttribute('class','itemContainer')

        let descriptionContainer = document.createElement('div')
        let imageContainer = document.createElement("div")
        let img = document.createElement("img")
        img.setAttribute('src',x.image_url)
        imageContainer.append(img);

        let detailsContainer = document.createElement("div");
        let name = document.createElement('h6')
        name.innerText=x.name;
        let priceContainer = document.createElement('div')
        let strikedoffprice = document.createElement('p');
        strikedoffprice.innerText = x.strikedoffprice;
        strikedoffprice.style.textDecoration='line-through'
        let price = document.createElement('p');
        price.innerText = x.price;
        priceContainer.append(strikedoffprice,price)
        detailsContainer.append(name,priceContainer);
        descriptionContainer.append(imageContainer,detailsContainer)
        
        let countContainer = document.createElement("div")
        let increase = document.createElement('button')
        increase.innerText = "+"
        increase.addEventListener('click',increaseCount)
        let decrease = document.createElement('button')
        decrease.innerText = "-"
        decrease.addEventListener('click',decreaseCount)
        let quantity = document.createElement('p')
        quantity.innerText = x.quantity;
        countContainer.append(decrease,quantity,increase)
        parentDiv.append(descriptionContainer,countContainer)
        document.getElementById('items').append(parentDiv);
    }
    if(cart.length>0){
        total.style.margin='auto'
        var sum = 0;
        for(x of cart){
            sum+=x.price*x.quantity;
        }
        total.innerText='Subtotal:'+sum
        document.querySelector('body').append(total)
    }
}
}


function increaseCount() {
    let target = this.parentNode.parentNode.querySelector('h6').innerText;
    cart.map(function(e,i){
        if(e.name == target){
            e.quantity++;
            cart[i]=e;
            localStorage.setItem('cart',JSON.stringify(cart))
        }
    })
    refreshCart()
}
function decreaseCount() {
    // console.log('ok')
    let target = this.parentNode.parentNode.querySelector('h6').innerText;
    cart.map(function(e,i){
        if(e.name == target){
            e.quantity--;
            cart[i]=e;
            localStorage.setItem('cart',JSON.stringify(cart))
        }
    })
    refreshCart()
}

function refreshCart(){
 document.getElementById('items').innerHTML=""
    let cart = JSON.parse(localStorage.getItem('cart'))
        for(const x of cart){
        if(x.quantity>0){
        let parentDiv = document.createElement("div");
        parentDiv.setAttribute('class','itemContainer')
        let descriptionContainer = document.createElement('div')
        let imageContainer = document.createElement("div")
        let img = document.createElement("img")
        img.setAttribute('src',x.image_url)
        imageContainer.append(img);

        let detailsContainer = document.createElement("div");
        let name = document.createElement('h6')
        name.innerText=x.name;
        let priceContainer = document.createElement('div')
        let strikedoffprice = document.createElement('p');
        strikedoffprice.innerText = x.strikedoffprice;
        strikedoffprice.style.textDecoration='line-through'
        let price = document.createElement('p');
        price.innerText = x.price;
        priceContainer.append(strikedoffprice,price)
        detailsContainer.append(name,priceContainer);
        descriptionContainer.append(imageContainer,detailsContainer)
        
        let countContainer = document.createElement("div")
        let increase = document.createElement('button')
        increase.innerText = "+"
        increase.addEventListener('click',increaseCount)
        let decrease = document.createElement('button')
        decrease.innerText = "-"
        decrease.addEventListener('click',decreaseCount)
        let quantity = document.createElement('p')
        quantity.innerText = x.quantity;
        countContainer.append(decrease,quantity,increase)
        parentDiv.append(descriptionContainer,countContainer)
        document.getElementById('items').append(parentDiv);
        }else{
            cart.pop(x)
            localStorage.setItem('cart',JSON.stringify(cart))
            document.getElementById('subtotal').remove()
        }
        if(cart.length==0){
        h1=document.createElement('h3');
        h1.style.margin="10% 5%"
        h1.innerHTML = "Oops, Looks like your cart is empty.<br> Let's get <a href='mens.html'>back</a> to shopping. <br> "
        document.getElementById("items").append(h1);
    }
    if(cart.length>0){
        total.style.margin='auto'
        var sum = 0;
        for(x of cart){
            sum+=x.price*x.quantity;
        }
        total.innerText='Subtotal:'+sum
        document.querySelector('body').append(total)       
    }
    }
}