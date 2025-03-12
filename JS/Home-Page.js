window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 20) {
        navbar.style.opacity = "0.8";  // Slightly faded
    } else {
        navbar.style.opacity = "1";  // Fully visible
    }
});


window.addEventListener("scroll", function() {
    let image = document.querySelector(".Stethoscope");
    let scrollPosition = window.scrollY;

    // Moves the image to the right on scroll down and back on scroll up
    image.style.transform = `translateX(${scrollPosition * 0.7}px) rotate(45deg)`;
});
