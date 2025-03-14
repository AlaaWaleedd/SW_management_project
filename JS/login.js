document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const signUpForm = document.querySelector(".sign-up-container");
    const signInForm = document.querySelector(".sign-in-container");
    const overlay = document.querySelector(".overlay-container");

    signUpButton.addEventListener("click", function () {
        signUpForm.style.transform = "translateX(0)";
        signInForm.style.transform = "translateX(100%)";
        overlay.style.transform = "translateX(-100%)";
    });

    signInButton.addEventListener("click", function () {
        signUpForm.style.transform = "translateX(-100%)";
        signInForm.style.transform = "translateX(0)";
        overlay.style.transform = "translateX(0)";
    });
});


