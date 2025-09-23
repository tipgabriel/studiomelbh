// script.js

// Funcionalidade do menu mobile
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Fechar o menu mobile ao clicar em um link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
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
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Funcionalidade da Galeria
document.addEventListener('DOMContentLoaded', () => {
    const portfolioItems = Array.from(document.querySelectorAll('.portfolio-item img'));
    const modal = document.getElementById('gallery-modal');
    const modalImage = document.getElementById('modal-image');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const closeModalBtn = document.getElementById('close-modal');

    let currentIndex = 0;

    const openModal = (index) => {
        currentIndex = index;
        modalImage.src = portfolioItems[currentIndex].src;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Evita scroll do corpo
    };

    const closeModal = () => {
        modal.classList.add('hidden');
        document.body.style.overflow = ''; // Habilita o scroll novamente
    };

    const showNext = () => {
        currentIndex = (currentIndex + 1) % portfolioItems.length;
        modalImage.src = portfolioItems[currentIndex].src;
    };

    const showPrev = () => {
        currentIndex = (currentIndex - 1 + portfolioItems.length) % portfolioItems.length;
        modalImage.src = portfolioItems[currentIndex].src;
    };

    // Eventos de clique para abrir o modal
    portfolioItems.forEach((item, index) => {
        item.addEventListener('click', () => openModal(index));
    });

    // Eventos de clique nos botões de navegação
    if (prevBtn) {
        prevBtn.addEventListener('click', showPrev);
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', showNext);
    }
    

    // Evento para fechar o modal
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Navegação com setas do teclado
    document.addEventListener('keydown', (e) => {
        if (modal && !modal.classList.contains('hidden')) {
            if (e.key === 'ArrowLeft') {
                showPrev();
            } else if (e.key === 'ArrowRight') {
                showNext();
            } else if (e.key === 'Escape') {
                closeModal();
            }
        }
    });
});
