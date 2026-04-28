$(document).ready(function () {
  /* ===============================
     TYPEWRITER
  =============================== */
  const text = "Desenvolvedora Full Stack Jr.";
  let i = 0;
  const typewriterElement = document.getElementById("typewriter-text");

  function typeWriter() {
    if (!typewriterElement || i >= text.length) return;
    typewriterElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 90);
  }
  typeWriter();

  /* ===============================
     TEMA ESCURO / CLARO
  =============================== */
  const toggleBtn = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(saved || (prefersDark ? "dark" : "light"));

  toggleBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  });

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    themeIcon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
  }

  /* ===============================
     MENU MOBILE
  =============================== */
  const $mobileMenu = $("#mobile-menu");
  const $menuToggle = $("#mobile-menu-toggle");
  const $menuIcon = $("#mobile-menu-toggle i");

  function closeMobileMenu() {
    $mobileMenu.removeClass("active");
    $menuIcon.addClass("fa-bars").removeClass("fa-xmark");
  }

  $menuToggle.on("click", function () {
    $mobileMenu.toggleClass("active");
    $menuIcon.toggleClass("fa-bars fa-xmark");
  });

  $("#mobile-menu a").on("click", function () {
    closeMobileMenu();
  });

  /* ===============================
     SCROLL SUAVE
  =============================== */
  $('a[href^="#"]').on("click", function (e) {
    const id = this.getAttribute("href");
    if (id === "#") return;

    const target = document.querySelector(id);
    if (!target) return;

    e.preventDefault();

    const headerOffset = 80;

    setTimeout(() => {
      if (id === "#home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return;
      }

      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }, 200);
  });

  /* ===============================
     HEADER SCROLL
  =============================== */
  const header = document.getElementById("header");

  window.addEventListener(
    "scroll",
    () => {
      header.classList.toggle("scrolled", window.scrollY > 50);
    },
    { passive: true },
  );

  /* ===============================
     WHATSAPP
  =============================== */
  $("#whatsapp-action").on("click", function (e) {
    e.preventDefault();

    const phoneNumber = "5515996514120";
    const message = encodeURIComponent(
      "Olá Madu, vi seu portfólio e gostaria de conversar!",
    );

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  });

  /* ===============================
     LER MAIS (CORRIGIDO)
  =============================== */
  const btn = document.getElementById("read-more-btn");
  const bio = document.getElementById("bio-text");

  if (btn && bio) {
    btn.addEventListener("click", () => {
      bio.classList.toggle("expanded");

      btn.textContent = bio.classList.contains("expanded")
        ? "Ler menos"
        : "Ler mais";
    });
  }

  /* ===============================
     SCROLL REVEAL (DESKTOP)
  =============================== */
  if (window.innerWidth > 768) {
    const sr = ScrollReveal({
      origin: "top",
      distance: "50px",
      duration: 1500,
      delay: 200,
      reset: false,
    });

    sr.reveal(".hero-section", { delay: 200 });
    sr.reveal(".about-text", { origin: "left", delay: 300 });
    sr.reveal(".profile-pic", { origin: "right", delay: 500 });
    sr.reveal(".skill-item", { interval: 150, origin: "bottom" });
    sr.reveal(".project-card", { interval: 200, scale: 0.9 });
    sr.reveal(".contact-content", { delay: 200, origin: "bottom" });
  }
});
