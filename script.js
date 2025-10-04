document.addEventListener('DOMContentLoaded', () => {
    // Menu mobile
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Fechar menu mobile ao clicar em um link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Atualizar ano do copyright
    document.getElementById('copyright-year').textContent = `© ${new Date().getFullYear()} Studiomelbh. Todos os direitos reservados.`;

    // Lógica do Portfólio (Galeria de Imagens)
    const portfolioItems = document.querySelectorAll('.portfolio-item img');
    const galleryModal = document.getElementById('gallery-modal');
    const modalImage = document.getElementById('modal-image');
    const closeModalButton = document.getElementById('close-modal');
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');
    let currentIndex = 0;

    // Abrir modal
    portfolioItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentIndex = index;
            modalImage.src = item.src;
            galleryModal.classList.remove('hidden');
            galleryModal.classList.add('flex'); // Para centralizar
            document.body.style.overflow = 'hidden'; // Evita scroll da página
        });
    });

    // Fechar modal
    closeModalButton.addEventListener('click', () => {
        galleryModal.classList.add('hidden');
        galleryModal.classList.remove('flex');
        document.body.style.overflow = ''; // Restaura scroll da página
    });

    // Fechar modal clicando fora da imagem
    galleryModal.addEventListener('click', (e) => {
        if (e.target === galleryModal) {
            galleryModal.classList.add('hidden');
            galleryModal.classList.remove('flex');
            document.body.style.overflow = '';
        }
    });

    // Navegação pelas imagens
    function showImage(index) {
        if (index < 0) {
            currentIndex = portfolioItems.length - 1;
        } else if (index >= portfolioItems.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        modalImage.src = portfolioItems[currentIndex].src;
    }

    prevButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Evita fechar o modal
        showImage(currentIndex - 1);
    });

    nextButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Evita fechar o modal
        showImage(currentIndex + 1);
    });

    // Navegação pelo teclado (opcional)
    document.addEventListener('keydown', (e) => {
        if (!galleryModal.classList.contains('hidden')) {
            if (e.key === 'Escape') {
                closeModalButton.click();
            } else if (e.key === 'ArrowLeft') {
                prevButton.click();
            } else if (e.key === 'ArrowRight') {
                nextButton.click();
            }
        }
    });
});
