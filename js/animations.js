$(document).ready(function () {

    /* ===============================
       TYPEWRITER
    =============================== */
    const text = "Desenvolvedora Web Front-End Jr.";
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
       MENU MOBILE
    =============================== */
    const $mobileMenu = $('#mobile-menu');
    const $menuToggle = $('#mobile-menu-toggle');
    const $menuIcon = $('#mobile-menu-toggle i');

    function closeMobileMenu() {
        $mobileMenu.removeClass('active');
        $menuIcon.addClass('fa-bars').removeClass('fa-xmark');
    }

    $menuToggle.on('click', function () {
        $mobileMenu.toggleClass('active');
        $menuIcon.toggleClass('fa-bars fa-xmark');
    });

    $('#mobile-menu a').on('click', function () {
        if (window.innerWidth <= 768) {
            closeMobileMenu();
        }
    });


    /* ===============================
       SCROLL SUAVE (CORRIGIDO MOBILE)
    =============================== */
    $('a[href^="#"]').on('click', function (e) {
        const id = this.getAttribute('href');
        if (id === '#') return;

        const target = document.querySelector(id);
        if (!target) return;

        e.preventDefault();

        const isMobile = window.innerWidth <= 768;
        const headerOffset = 80;

        if (isMobile) {
            closeMobileMenu();
        }

        setTimeout(() => {

            // ✅ CORREÇÃO ESPECÍFICA PARA HOME
            if (id === '#home') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }

            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition =
                elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

        }, isMobile ? 250 : 0);
    });


    /* ===============================
       HEADER SCROLL
    =============================== */
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });


    /* ===============================
       WHATSAPP
    =============================== */
    $('#whatsapp-action').on('click', function (e) {
        e.preventDefault();

        const phoneNumber = "5515996514120";
        const message = encodeURIComponent(
            "Olá Madu, vi seu portfólio e gostaria de conversar!"
        );

        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    });


    /* ===============================
       SCROLL REVEAL (DESKTOP ONLY)
    =============================== */
    if (window.innerWidth > 768) {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '50px',
            duration: 1500,
            delay: 200,
            reset: false
        });

        sr.reveal('.hero-section', { delay: 200 });
        sr.reveal('.about-text', { origin: 'left', delay: 300 });
        sr.reveal('.profile-pic', { origin: 'right', delay: 500 });
        sr.reveal('.skill-item', { interval: 150, origin: 'bottom' });
        sr.reveal('.project-card', { interval: 200, scale: 0.9 });
        sr.reveal('.contact-content', { delay: 200, origin: 'bottom' });
    }

});
