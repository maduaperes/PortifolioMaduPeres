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
    // Inicia o efeito
    typeWriter();

    // 2. MENU MOBILE TOGGLE (Ajustado para não quebrar o ::marker)
    $('#mobile-menu-toggle').on('click', function () {
        // Usamos slideToggle sem forçar 'flex', assim o CSS controla o display: list-item
        $('#mobile-menu').slideToggle();
        $(this).find('i').toggleClass('fa-bars fa-xmark');
    });

    // Fecha o menu ao clicar em um link (Melhorado)
    $('#mobile-menu a').on('click', function () {
        if ($(window).width() <= 768) {
            $('#mobile-menu').slideUp();
            $('#mobile-menu-toggle i').addClass('fa-bars').removeClass('fa-xmark');
        }
    });

    // 3. AÇÃO DO BOTÃO WHATSAPP
    $('#whatsapp-action').on('click', function(e) {
        e.preventDefault();
        const phoneNumber = "5515996514120";
        const message = encodeURIComponent("Olá Madu, vi seu portfólio e gostaria de conversar!");
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    });

    // 4. MUDAR HEADER NO SCROLL
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 50) {
            $('#header').addClass('scrolled');
        } else {
            $('#header').removeClass('scrolled');
        }
    });

    // 5. SCROLL SUAVE PARA LINKS INTERNOS (CORRIGIDO PARA O #HOME)
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        const id = $(this).attr('href');
        
        if (id === '#') return;

        // Se o link for #home ou se o elemento não for encontrado, vai para o topo (0)
        // Caso contrário, calcula a posição do elemento com desconto do header
        let targetOffset = 0;
        if (id !== '#home' && $(id).length > 0) {
            targetOffset = $(id).offset().top - 80;
        }

        $('html, body').stop().animate({
            scrollTop: targetOffset
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

    sr.reveal('.hero-section', { delay: 200 });
    sr.reveal('.about-text', { origin: 'left', delay: 300 });
    sr.reveal('.profile-pic', { origin: 'right', delay: 500 });
    sr.reveal('.skill-item', { interval: 150, origin: 'bottom' });
    sr.reveal('.project-card', { interval: 200, scale: 0.9 });
    sr.reveal('.contact-content', { delay: 200, origin: 'bottom' });
});