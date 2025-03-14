

/*Navbar Scrolling*/ 
window.addEventListener("scroll", function() {
    let image = document.querySelector(".Stethoscope");
    let scrollPosition = window.scrollY;
    image.style.transform = `translateX(${scrollPosition * 0.7}px) rotate(45deg)`;
});

/*Swiper Carousel*/
document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".swiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: -50,  // Slides slightly overlap
        loop: true,  
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        effect: "slide",
    });
});

var swiper = new Swiper(".swiper", {
    loop: true, // Enables infinite looping
    autoplay: {
        delay: 3000, // Auto slide every 3 seconds
        disableOnInteraction: false, // Keeps autoplay running even after user interaction
    },
    slidesPerView: "auto", // Adjust slides dynamically
    centeredSlides: true, // Centers the active slide
    spaceBetween: 20, // Space between slides
    grabCursor: true, // Cursor style
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});