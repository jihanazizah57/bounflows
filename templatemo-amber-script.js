// =========================
// LOADING SCREEN
// =========================
window.addEventListener("load", function () {

    const loadingScreen = document.getElementById("loadingScreen");

    loadingScreen.style.opacity = "0";

    setTimeout(() => {
        loadingScreen.style.display = "none";
    }, 500);

});

// =========================
// MOBILE MENU
// =========================
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});

// =========================
// HEADER SHADOW ON SCROLL
// =========================
const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
        header.style.background = "rgba(255,255,255,0.95)";

    } else {

        header.style.boxShadow = "none";
        header.style.background = "rgba(255,255,255,0.9)";

    }

});

// =========================
// SCROLL REVEAL ANIMATION
// =========================
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// =========================
// COVERFLOW AUTO SLIDE
// =========================
const coverflowContainer = document.getElementById("coverflowContainer");

const items = document.querySelectorAll(".coverflow-item");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const playPauseBtn = document.getElementById("playPauseBtn");

let currentIndex = 0;
let autoSlide = true;

// =========================
// UPDATE SLIDER
// =========================
function updateSlider() {

    const itemWidth = items[0].offsetWidth + 30;

    coverflowContainer.scrollTo({
        left: currentIndex * itemWidth,
        behavior: "smooth"
    });

}

// =========================
// NEXT SLIDE
// =========================
function nextSlide() {

    currentIndex++;

    if (currentIndex >= items.length) {
        currentIndex = 0;
    }

    updateSlider();

}

// =========================
// PREV SLIDE
// =========================
function prevSlide() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    }

    updateSlider();

}

// =========================
// BUTTON EVENTS
// =========================
nextBtn.addEventListener("click", nextSlide);

prevBtn.addEventListener("click", prevSlide);

// =========================
// AUTO PLAY
// =========================
let slideInterval = setInterval(nextSlide, 3000);

// =========================
// PLAY / PAUSE BUTTON
// =========================
playPauseBtn.addEventListener("click", () => {

    if (autoSlide) {

        clearInterval(slideInterval);

        playPauseBtn.innerHTML = "▶";

        autoSlide = false;

    } else {

        slideInterval = setInterval(nextSlide, 3000);

        playPauseBtn.innerHTML = "❚❚";

        autoSlide = true;

    }

});

// =========================
// HOVER EFFECT
// =========================
items.forEach((item) => {

    item.addEventListener("mouseenter", () => {

        item.style.transform = "translateY(-10px) scale(1.02)";

    });

    item.addEventListener("mouseleave", () => {

        item.style.transform = "translateY(0) scale(1)";

    });

});

// =========================
// SMOOTH SCROLL NAVIGATION
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// =========================
// ACTIVE MENU ON SCROLL
// =========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {

            link.classList.add("active");

        }

    });

});

// =========================
// CONTACT CARD ANIMATION
// =========================
const contactItems = document.querySelectorAll(".contact-item");

contactItems.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";
        card.style.boxShadow = "0 15px 30px rgba(255,79,129,0.2)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";
        card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";

    });

});

// =========================
// SERVICE CARD EFFECT
// =========================
const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";
        card.style.transition = "0.3s";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});

// =========================
// HERO TEXT ANIMATION
// =========================
const heroTitle = document.querySelector(".hero-title");

setTimeout(() => {

    heroTitle.style.opacity = "1";
    heroTitle.style.transform = "translateY(0)";

}, 500);

// =========================
// INITIAL STYLE HERO TITLE
// =========================
heroTitle.style.opacity = "0";
heroTitle.style.transform = "translateY(30px)";
heroTitle.style.transition = "1s";

// =========================
// CONSOLE MESSAGE
// =========================
console.log("Blooming Bouquet Website Loaded Successfully 🌸");
