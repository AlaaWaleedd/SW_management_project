document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("signup-link").addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".login-box").classList.add("hidden");
        document.querySelector(".signup-box").classList.remove("hidden");
    });

    document.getElementById("login-link").addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".signup-box").classList.add("hidden");
        document.querySelector(".login-box").classList.remove("hidden");
    });
});
