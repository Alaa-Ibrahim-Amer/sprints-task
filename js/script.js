function add() {
  let product = document.getElementById("product-name").value;
  let price = document.getElementById("price").value;
  let quantity = document.getElementById("quantity").value;
  let totalPrice = quantity * price;
  price = Number(price);
  quantity = Number(quantity);
  if (quantity <= 0 ||  !Number.isInteger (quantity) || price < 0 || ! Number.isInteger(price)) {
    alert("price and quantity should be positive numbers");
  } else {
    document.getElementById(
      "products"
    ).innerHTML += `<tr><td>${product}</td><td>${price}</td><td>${quantity}</td><td>${totalPrice}</td><td><button>Remove?</button></td></tr>`;
  }
}
