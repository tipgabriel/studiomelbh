// script.js

// Funcionalidade do menu mobile
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Fechar o menu mobile ao clicar em um link (se for o caso)
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
});


// Atualizar o ano do copyright automaticamente
const copyrightSpan = document.getElementById('copyright-year');
const currentYear = new Date().getFullYear();
copyrightSpan.innerHTML = `&copy; ${currentYear} StudioMelBH. Todos os direitos reservados.`;

// Animação de scroll suave para os links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
