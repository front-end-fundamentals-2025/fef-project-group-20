
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartItem = document.getElementById("cart-container");

function addToCart(name, image, price) {
  cart.push({ name, image, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  if (document.getElementById("cart-container")) {
    showCart();
  }
}

function showCart() {
  if (cartItem) {
    cartItem.innerHTML = "";
    cart.forEach((item, index) => {
      let div = document.createElement("div");
      div.className = "cartItem";
      div.innerHTML = `
     <img src="${item.image}" alt="${item.name}">
     <span>${item.name} - ${item.price}</span>
     <button onclick="removeFromCart(${index})">Remove</button>`;
      cartItem.appendChild(div);
    });
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart();
}

if (cartItem) {
  showCart();
}
