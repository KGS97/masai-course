// Export navbar from here
export default function () {
  return ` <nav
        style="
          color: white;
          background-color: black;
          display: flex;
          justify-content: space-between;
          padding:20px 25px;
        "
      >
        <a href="index.html" id="home" style="color: white">Home</a>
        <div id="cart" style="display: flex;
          justify-content: space-between;width:5%">
          <a href="cart.html" id="cart" style="color: white">Cart</a>
          <div id="cart-count"></div>
        </div>
      </nav>`;
}
