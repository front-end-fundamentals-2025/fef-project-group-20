
/*using youtube and also chatGPT for get help for js 
https://youtu.be/_nnqP94Tu9g?si=zH3Q3wNSz04gKp9G
https://chatgpt.com/share/67d4230e-3544-8004-b278-f16eeec024cb*/ 

let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartItem = document.getElementById("cart-container");
const openCartButton =document.getElementById("open-cart");
const closeCartButton =document.getElementById("close-cart");
const cartOverlay =document.getElementById("cart-overlay");
const mobileOpenCart =document.getElementById("mobile-open-cart")

// add to cart 
function addToCart(name, image) {
  cart.push({ name, image});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to Cart");
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
     <span>${item.name}</span>
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

// open 
if (openCartButton) {
  openCartButton.addEventListener("click", function (){
  cartOverlay.classList.add("active");
});
}

// open in responsive mode
if (mobileOpenCart) {
  mobileOpenCart.addEventListener("click", function() {
    if (cartOverlay) {
      cartOverlay.classList.add("active");
    }
  });
}

// close
 if (closeCartButton){
  closeCartButton.addEventListener("click", function (){
  cartOverlay.classList.remove("active");
}); 
 }