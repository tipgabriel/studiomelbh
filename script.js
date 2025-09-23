// script.js

// Funcionalidade do menu mobile
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('show'); // Ajuste: usar a classe 'show' do CSS
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('show'); // Fechar menu ao clicar
        });
    });
}

// Atualizar o ano do copyright automaticamente
const copyrightSpan = document.getElementById('copyright-year');
if (copyrightSpan) {
    const currentYear = new Date().getFullYear();
    copyrightSpan.textContent = `© ${currentYear} Studiomelbh. Todos os direitos reservados.`;
}

// Animação de scroll suave para os links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Lógica da Galeria de Imagens
document.addEventListener('DOMContentLoaded', () => {
    const portfolioItems = document.querySelectorAll('.portfolio-item img');
    const galleryModal = document.getElementById('gallery-modal');
    const modalImage = document.getElementById('modal-image');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const closeModalBtn = document.getElementById('close-modal');

    let currentImageIndex = 0;
    const images = Array.from(portfolioItems).map(item => item.src);

    const openModal = (index) => {
        currentImageIndex = index;
        modalImage.src = images[currentImageIndex];
        galleryModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        galleryModal.classList.add('hidden');
        document.body.style.overflow = '';
    };

    const showNextImage = () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        modalImage.src = images[currentImageIndex];
    };

    const showPrevImage = () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        modalImage.src = images[currentImageIndex];
    };

    portfolioItems.forEach((item, index) => {
        item.addEventListener('click', () => openModal(index));
    });

    if (prevBtn) prevBtn.addEventListener('click', showPrevImage);
    if (nextBtn) nextBtn.addEventListener('click', showNextImage);
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

    if (galleryModal) {
        galleryModal.addEventListener('click', (e) => {
            if (e.target === galleryModal) closeModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (galleryModal && !galleryModal.classList.contains('hidden')) {
            if (e.key === 'ArrowLeft') showPrevImage();
            else if (e.key === 'ArrowRight') showNextImage();
            else if (e.key === 'Escape') closeModal();
        }
    });
});
