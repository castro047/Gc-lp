document.addEventListener('DOMContentLoaded', function () {

    const numero = '5547997327311';

    function abrirWhatsApp(mensagem) {
        const texto = encodeURIComponent(mensagem);
        window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');
    }

    /* MENU MOBILE */

    const logoMenu = document.getElementById('logoMenu');
    const menu = document.getElementById('menu');

    if (logoMenu && menu) {
        logoMenu.addEventListener('click', function (e) {
            if (window.innerWidth <= 900) {
                e.preventDefault();
                menu.classList.toggle('active');
            }
        });
    }

    const linksMenu = document.querySelectorAll('#menu a');

    linksMenu.forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 900 && menu) {
                menu.classList.remove('active');
            }
        });
    });

    /* WHATSAPP */

    const btnAgende = document.getElementById('servicoautomoveis');
    const btnOrcamentoGratis = document.getElementById('btnOrcamentoGratis');
    const cardAutomoveis = document.getElementById('servicoAutomoveis');
    const cardResidencial = document.getElementById('servicoResidencial');

    if (btnAgende) {
        btnAgende.addEventListener('click', function(e) {
            e.preventDefault();
            abrirWhatsApp('Olá! Gostaria de mais informações e agendar um serviço de películas. Podem me ajudar?');
        });
    }

    if (btnOrcamentoGratis) {
        btnOrcamentoGratis.addEventListener('click', function(e) {
            e.preventDefault();
            abrirWhatsApp('Olá! Gostaria de solicitar um orçamento gratuito para películas automotivas.');
        });
    }

    if (cardAutomoveis) {
        cardAutomoveis.addEventListener('click', function() {
            abrirWhatsApp('Olá! Gostaria de mais informações sobre os SERVIÇOS de películas no meu Automóvel. Podem me ajudar?');
        });
    }

    if (cardResidencial) {
        cardResidencial.addEventListener('click', function() {
            abrirWhatsApp('Olá! Gostaria de mais informações sobre os SERVIÇOS RESIDENCIAIS de películas. Podem me ajudar?');
        });
    }

    /* CARROSSEL */

    const slide = document.querySelector('.slide');

    const imagensDesktop = [
        'img/carrosel-1.png',
        'img/carrosel-2.png',
        'img/carrosel-3.png'
    ];

    const imagensMobile = [
        'img/mobile-carrosel-1.png',
        'img/mobile-carrosel-2.png',
        'img/mobile-carrosel-3.png'
    ];

    let imagemAtual = 0;

    function imagensAtuais() {
        return window.innerWidth <= 500 ? imagensMobile : imagensDesktop;
    }

    function trocarImagem() {
        if (!slide) return;

        const imagens = imagensAtuais();

        if (imagemAtual >= imagens.length) {
            imagemAtual = 0;
        }

        slide.style.opacity = "0.82";

        setTimeout(function() {
            slide.style.backgroundImage = `url("${imagens[imagemAtual]}")`;
            slide.style.opacity = "1";
        }, 250);
    }

    function iniciarCarrossel() {
        trocarImagem();

        setInterval(function() {
            imagemAtual++;
            trocarImagem();
        }, 4500);
    }

    window.addEventListener('resize', function() {
        imagemAtual = 0;
        trocarImagem();
    });

    iniciarCarrossel();

});