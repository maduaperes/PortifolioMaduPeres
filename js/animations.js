$(document).ready(function () {

    /* 1. TYPEWRITER */
    const text = "Desenvolvedora Web Front-End Jr.";
    let i = 0;
    const typewriterElement = document.getElementById("typewriter-text");

    function typeWriter() {
        if (typewriterElement && i < text.length) {
            typewriterElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();


    /* 2. MENU MOBILE (CORRETO, SEM slideToggle) */
    $('#mobile-menu-toggle').on('click', function () {
        $('#mobile-menu').toggleClass('active');
        $(this).find('i').toggleClass('fa-bars fa-xmark');
    });

    /* Fecha menu ao clicar em um link */
    $('#mobile-menu a').on('click', function () {
        if ($(window).width() <= 768) {
            $('#mobile-menu').removeClass('active');
            $('#mobile-menu-toggle i')
                .addClass('fa-bars')
                .removeClass('fa-xmark');
        }
    });


    /* 3. BOTÃO WHATSAPP */
    $('#whatsapp-action').on('click', function (e) {
        e.preventDefault();
        const phoneNumber = "5515996514120";
        const message = encodeURIComponent(
            "Olá Madu, vi seu portfólio e gostaria de conversar!"
        );
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    });


    /* 4. HEADER SCROLL */
    $(window).on('scroll', function () {
        $('#header').toggleClass('scrolled', $(this).scrollTop() > 50);
    });


    /* 5. SCROLL SUAVE */
    $('a[href^="#"]').on('click', function (e) {
        const id = $(this).attr('href');
        if (id === '#') return;

        e.preventDefault();

        let offset = 0;
        if (id !== '#home' && $(id).length) {
            offset = $(id).offset().top - 80;
        }

        $('html, body').animate({ scrollTop: offset }, 800);
    });


    /* 6. SCROLL REVEAL */
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

});
