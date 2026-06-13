// =====================================
// AIR CANVAS PORTFOLIO WEBSITE
// script.js
// =====================================

// -------------------------------------
// SCROLL REVEAL ANIMATION
// -------------------------------------

const revealElements = document.querySelectorAll(
  ".feature-card, .stat-card, .timeline-item, .future-card, .tech-item, .floating-card",
);

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach((element) => {
    const boxTop = element.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      element.classList.add("active");
      element.classList.add("reveal");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// -------------------------------------
// NAVBAR SCROLL EFFECT
// -------------------------------------

const navbar = document.querySelector(".navbar");

if (navbar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.style.background = "rgba(64, 64, 192, 0.4)";
      navbar.style.backdropFilter = "blur(20px)";
      navbar.style.boxShadow = "0 5px 20px rgba(75, 75, 75, 0.3)";
    } else {
      navbar.style.background = "#32323281";
      navbar.style.boxShadow = "none";
    }
  });
}

// -------------------------------------
// ACTIVE NAV LINK
// -------------------------------------

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active-link");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active-link");
    }
  });
});

// -------------------------------------
// STAT COUNTER
// -------------------------------------

const counters = document.querySelectorAll(".stat-card h3");
let counterStarted = false;

function startCounters() {
  if (counterStarted) return;

  const aboutSection = document.querySelector(".about");

  if (!aboutSection) return;

  const triggerTop = aboutSection.getBoundingClientRect().top;

  if (triggerTop < window.innerHeight - 150) {
    counterStarted = true;

    counters.forEach((counter) => {
      const originalText = counter.innerText;
      const target = parseInt(originalText);

      if (isNaN(target)) return;

      let count = 0;
      const speed = target / 60;

      function updateCounter() {
        count += speed;

        if (count < target) {
          counter.innerText = Math.floor(count);
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = originalText;
        }
      }

      updateCounter();
    });
  }
}

window.addEventListener("scroll", startCounters);
window.addEventListener("load", startCounters);

// -------------------------------------
// SMOOTH SCROLL
// -------------------------------------

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// -------------------------------------
// CUSTOM CURSOR GLOW
// -------------------------------------

const glow = document.createElement("div");
glow.className = "cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

// -------------------------------------
// HERO TYPING EFFECT
// -------------------------------------

const heroTitle = document.querySelector(".hero h1");

if (heroTitle) {
  const text = heroTitle.textContent;
  heroTitle.textContent = "";

  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      heroTitle.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 25);
    }
  }

  window.addEventListener("load", typeWriter);
}

// -------------------------------------
// FLOATING CARD PARALLAX
// -------------------------------------

window.addEventListener("mousemove", (e) => {
  const cards = document.querySelectorAll(".floating-card");

  const x = (window.innerWidth / 2 - e.pageX) / 40;
  const y = (window.innerHeight / 2 - e.pageY) / 40;

  cards.forEach((card) => {
    card.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// -------------------------------------
// FEATURE CARD HOVER EFFECT
// -------------------------------------

const featureCards = document.querySelectorAll(".feature-card");

featureCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 0 25px rgba(99,102,241,0.5)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "none";
  });
});

// -------------------------------------
// FOOTER YEAR
// -------------------------------------

const footer = document.querySelector("footer");

if (footer) {
  footer.innerHTML = `© ${new Date().getFullYear()} Air Canvas Project | All Rights Reserved.`;
}

// -------------------------------------
// INITIALIZE
// -------------------------------------

window.addEventListener("load", () => {
  revealOnScroll();
  startCounters();
  console.log("🎨 Air Canvas Portfolio Loaded Successfully");
});

// scrolltrigger

gsap.to(".scroll-text h1", {
  transform: "translateX(-65%)",
  scrollTrigger: {
    trigger: ".scroll-text",
    scroller: "body",
    start: "top 20%",
    scrub: 2,
    pin: true,
    end: "top -60%",
  },
});


// cursor
var cursor = document.getElementById("cursor")

var main = document.getElementById("main")

main.addEventListener("mousemove",function(dets){
  gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
    
  })
})