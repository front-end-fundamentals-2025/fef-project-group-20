let cartPart = JSON.parse(localStorage.getItem("cart")) || [];
const cartItem = document.getElementById("card-container");

function addToCart(name, image, price) {
  cart.push({ name, image, price });
  localStorage.setItem("cart", JSON.stringify(cart));
}

function showCart() {
  if (cartItem) {
    cartItem.innerHTML = "";
    cart.array.forEach(item,index)=> {
     let div = document.createElement("div")
    }
     
    });
  }
}
