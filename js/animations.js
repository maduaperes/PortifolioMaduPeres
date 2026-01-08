$(document).ready(function () {
    // 1. EFEITO DE DIGITAÇÃO (TYPEWRITER)
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

    // 2. MENU MOBILE TOGGLE
    $('#mobile-menu-toggle').on('click', function () {
        $('#mobile-menu').slideToggle().css('display', 'flex');
        $(this).find('i').toggleClass('fa-bars fa-xmark');
    });

    // Fecha o menu ao clicar em um link
    $('#mobile-menu a, .nav-list a').on('click', function () {
        if ($(window).width() <= 768) {
            $('#mobile-menu').hide();
            $('#mobile-menu-toggle i').addClass('fa-bars').removeClass('fa-xmark');
        }
    });

    // 3. AÇÃO DO BOTÃO WHATSAPP (NÚMERO 15996514120)
    $('#whatsapp-action').on('click', function() {
        const phoneNumber = "5515996514120";
        const message = encodeURIComponent("Olá Madu, vi seu portfólio e gostaria de conversar!");
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    });

    // 4. MUDAR HEADER NO SCROLL
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#header').addClass('scrolled');
        } else {
            $('#header').removeClass('scrolled');
        }
    });

    // 5. SCROLL SUAVE PARA LINKS INTERNOS
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        const id = $(this).attr('href');
        if (id === '#') return;
        
        const targetOffset = $(id).offset().top;

        $('html, body').animate({
            scrollTop: targetOffset - 80 
        }, 800);
    });

    // 6. ANIMAÇÕES DE REVELAÇÃO (SCROLLREVEAL)
    const sr = ScrollReveal({
        origin: 'top',
        distance: '50px',
        duration: 1500,
        delay: 200,
        reset: false 
    });

    // Revelações específicas
    sr.reveal('.hero-section .content', { delay: 200 });
    sr.reveal('.graphic-element', { delay: 400, distance: '100px', interval: 200 });
    sr.reveal('.about-text', { origin: 'left', delay: 300 });
    sr.reveal('.profile-pic', { origin: 'right', delay: 500 });
    sr.reveal('.skill-item', { interval: 150, origin: 'bottom' });
    sr.reveal('.project-card', { interval: 200, scale: 0.9 });
    sr.reveal('.contact-content', { delay: 200, origin: 'bottom' });
    sr.reveal('.social-links a', { interval: 200, delay: 400 });
});