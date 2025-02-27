const signupButton = document.getElementById("signup");
const loginButton = document.getElementById("login");
const containerElement = document.querySelector(".container");

signupButton.addEventListener("click", function(){
    containerElement.classList.add("right-panel-active")
});

loginButton.addEventListener("click", function(){
    containerElement.classList.remove("right-panel-active")
});