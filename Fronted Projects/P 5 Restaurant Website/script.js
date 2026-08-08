// 1. Scroll to Top Logic
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// 2. Navigation Menu Logic
const hamburger = document.querySelector(".hamburger");
const navBtn = document.querySelector(".btn");
const closeBtn = document.querySelector(".close-btn");
const navLinks = document.querySelectorAll(".btn a");

// Hamburger click: Open / Toggle menu
hamburger.addEventListener("click", function() {
    navBtn.classList.add("active");
});

// Cross (X) click: Close menu
closeBtn.addEventListener("click", function() {
    navBtn.classList.remove("active");
});

// Link click: Jab user kisi link par click kare to menu auto close ho jaye
navLinks.forEach(link => {
    link.addEventListener("click", function() {
        navBtn.classList.remove("active");
    });
});