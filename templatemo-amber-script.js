// ===============================
// LOADING SCREEN
// ===============================

window.addEventListener("load", function () {

    const loadingScreen = document.getElementById("loadingScreen");

    setTimeout(() => {
        loadingScreen.style.opacity = "0";

        setTimeout(() => {
            loadingScreen.style.display = "none";
        }, 500);

    }, 1000);

});


// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// ===============================
// SMOOTH ACTIVE MENU
// ===============================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ===============================
// REVEAL ANIMATION
// ===============================

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    reveals.forEach(reveal => {

        const revealTop = reveal.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            reveal.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ===============================
// HEADER SHADOW
// ===============================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";
        header.style.background = "rgba(255,255,255,0.95)";

    } else {

        header.style.boxShadow = "none";
        header.style.background = "rgba(255,255,255,0.85)";
    }

});


// ===============================
// COVERFLOW SLIDER
// ===============================

const container = document.getElementById("coverflowContainer");

const items = document.querySelectorAll(".coverflow-item");

const indicators = document.querySelectorAll(".indicator");

const prevBtn = document.getElementById("prevBtn");

const nextBtn = document.getElementById("nextBtn");

const playPauseBtn = document.getElementById("playPauseBtn");

let currentIndex = 0;

let autoSlide = true;

let slideInterval;


// ===============================
// UPDATE SLIDER
// ===============================

function updateSlider() {

    const itemWidth = items[0].offsetWidth + 30;

    container.style.transform =
        `translateX(-${currentIndex * itemWidth}px)`;

    indicators.forEach(indicator => {
        indicator.classList.remove("active");
    });

    indicators[currentIndex].classList.add("active");

}


// ===============================
// NEXT SLIDE
// ===============================

function nextSlide() {

    currentIndex++;

    if (currentIndex >= items.length) {
        currentIndex = 0;
    }

    updateSlider();

}


// ===============================
// PREVIOUS SLIDE
// ===============================

function prevSlide() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    }

    updateSlider();

}


// ===============================
// BUTTON EVENTS
// ===============================

nextBtn.addEventListener("click", () => {

    nextSlide();

});

prevBtn.addEventListener("click", () => {

    prevSlide();

});


// ===============================
// INDICATOR CLICK
// ===============================

indicators.forEach((indicator, index) => {

    indicator.addEventListener("click", () => {

        currentIndex = index;

        updateSlider();

    });

});


// ===============================
// AUTO PLAY
// ===============================

function startAutoSlide() {

    slideInterval = setInterval(() => {

        nextSlide();

    }, 3000);

}

function stopAutoSlide() {

    clearInterval(slideInterval);

}

startAutoSlide();


// ===============================
// PLAY / PAUSE BUTTON
// ===============================

playPauseBtn.addEventListener("click", () => {

    autoSlide = !autoSlide;

    if (autoSlide) {

        startAutoSlide();

        playPauseBtn.innerHTML = "❚❚";

    } else {

        stopAutoSlide();

        playPauseBtn.innerHTML = "▶";

    }

});


// ===============================
// HOVER STOP SLIDER
// ===============================

container.addEventListener("mouseenter", () => {

    stopAutoSlide();

});

container.addEventListener("mouseleave", () => {

    if (autoSlide) {

        startAutoSlide();

    }

});


// ===============================
// FLOWER CARD HOVER EFFECT
// ===============================

items.forEach(item => {

    item.addEventListener("mouseenter", () => {

        item.style.transform = "translateY(-15px) scale(1.03)";

    });

    item.addEventListener("mouseleave", () => {

        item.style.transform = "translateY(0) scale(1)";

    });

});


// ===============================
// SCROLL TOP BUTTON
// ===============================

// membuat tombol otomatis

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.width = "50px";
scrollBtn.style.height = "50px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.background = "#ff4f93";
scrollBtn.style.color = "white";
scrollBtn.style.fontSize = "22px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "999";
scrollBtn.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";


// tampil saat scroll

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});


// klik kembali ke atas

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ===============================
// TYPING EFFECT HERO TITLE
// ===============================

const heroTitle = document.querySelector(".hero-title");

const originalText = heroTitle.innerText;

heroTitle.innerText = "";

let letterIndex = 0;

function typingEffect() {

    if (letterIndex < originalText.length) {

        heroTitle.innerText += originalText.charAt(letterIndex);

        letterIndex++;

        setTimeout(typingEffect, 120);

    }

}

typingEffect();
