window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.opacity = "0.8";  // Slightly faded
    } else {
        navbar.style.opacity = "1";  // Fully visible
    }
});