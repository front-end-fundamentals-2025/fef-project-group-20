let slides = document.querySelectorAll(".slide");
let current = 0;



function changeSlide() {
    slides[current].classList.remove("active");
    current = current +1;
    if(current >= slides.length) {
        current = 0;
    }

    slides[current].classList.add("active");
}

setInterval(changeSlide, 5000);