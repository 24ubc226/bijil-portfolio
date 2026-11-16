// Mobile Navigation
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");

// Create mobile menu button
const menuButton = document.createElement("button");
menuButton.classList.add("menu-toggle");
menuButton.innerHTML = "☰";
menuButton.setAttribute("aria-label", "Toggle navigation");

navbar.appendChild(menuButton);

// Toggle navigation
menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuButton.innerHTML = navLinks.classList.contains("active")
        ? "✕"
        : "☰";
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuButton.innerHTML = "☰";
    });
});

// Reveal sections while scrolling
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".section").forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});

// Dynamic footer year
document.querySelector("footer p").innerHTML =
    `© ${new Date().getFullYear()} Bijil Biju. All Rights Reserved.`;
    // Professional Typing Animation
const typingText = document.getElementById("typing-text");

const roles = [
    "AI & ML Enthusiast",
    "Python Developer",
    "Aspiring Data Scientist",
    "Machine Learning Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingText.textContent = currentRole.substring(0, charIndex);

    let speed = deleting ? 45 : 90;

    if (!deleting && charIndex === currentRole.length) {
        deleting = true;
        speed = 1500;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

if (typingText) {
    typeEffect();
}