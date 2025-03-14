


window.addEventListener("scroll", function() {
    let image = document.querySelector(".Stethoscope");
    let scrollPosition = window.scrollY;

    // Moves the image to the right on scroll down and back on scroll up
    image.style.transform = `translateX(${scrollPosition * 0.7}px) rotate(45deg)`;
});


window.onload = function () {
    let index = 0;
    const slides = document.querySelectorAll(".slide");
    const dotsContainer = document.getElementById("dots");
    const carouselContainer = document.getElementById("carouselContainer");

    // Create dots dynamically
    slides.forEach((_, i) => {
        let dot = document.createElement("span");
        dot.classList.add("dot");
        dot.setAttribute("onclick", `goToSlide(${i})`);
        dotsContainer.appendChild(dot);
    });

    function updateCarousel() {
        carouselContainer.style.transform = `translateX(-${index * 100}%)`;
        document.querySelectorAll(".dot").forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        index = (index + 1) % slides.length;
        updateCarousel();
    }

    function goToSlide(i) {
        index = i;
        updateCarousel();
    }

    setInterval(nextSlide, 6000); 
    updateCarousel();
};
