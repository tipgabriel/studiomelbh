document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuButton = document.getElementById('menu-button');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const body = document.body;
    const copyrightYear = document.getElementById('copyright-year');

    // Funcionalidade do Menu Mobile
    const toggleMobileMenu = () => {
        const isMenuOpen = mobileMenu.classList.contains('menu-open');
        if (isMenuOpen) {
            mobileMenu.classList.remove('menu-open');
            body.classList.remove('overflow-hidden', 'overlay-active');
            mobileMenu.setAttribute('aria-hidden', 'true');
            menuButton.setAttribute('aria-expanded', 'false');
        } else {
            mobileMenu.classList.add('menu-open');
            body.classList.add('overflow-hidden', 'overlay-active'); // Previne rolagem e adiciona overlay
            mobileMenu.setAttribute('aria-hidden', 'false');
            menuButton.setAttribute('aria-expanded', 'true');
        }
    };

    menuButton.addEventListener('click', toggleMobileMenu);
    mobileMenuClose.addEventListener('click', toggleMobileMenu);

    // Fechar menu mobile ao clicar no overlay
    body.addEventListener('click', (event) => {
        if (event.target.classList.contains('overlay-active') && mobileMenu.classList.contains('menu-open')) {
            toggleMobileMenu();
        }
    });

    // Fechar menu mobile ao clicar em um link
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', (e) => {
            // Previne o comportamento padrão para rolagem suave
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }

            toggleMobileMenu(); // Fecha o menu após clicar no link
        });
    });

    // Rolagem suave para links do menu desktop
    document.querySelectorAll('header nav a:not(#menu-button)').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Atualiza o ano no rodapé
    if (copyrightYear) {
        copyrightYear.textContent = `© ${new Date().getFullYear()} Studiomelbh. Todos os direitos reservados.`;
    }


    // Lógica da Galeria de Imagens
    const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
    const galleryModal = document.getElementById('gallery-modal');
    const modalImage = document.getElementById('modal-image');
    const closeModalBtn = document.getElementById('close-modal');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentImageIndex = 0;

    const openModal = (index) => {
        currentImageIndex = index;
        modalImage.src = galleryItems[currentImageIndex].dataset.img;
        galleryModal.classList.add('modal-open');
        body.classList.add('overflow-hidden'); // Para evitar rolagem no corpo quando o modal estiver aberto
        galleryModal.setAttribute('aria-hidden', 'false');
    };

    const closeModal = () => {
        galleryModal.classList.remove('modal-open');
        body.classList.remove('overflow-hidden');
        galleryModal.setAttribute('aria-hidden', 'true');
    };

    const showNextImage = () => {
        currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
        modalImage.src = galleryItems[currentImageIndex].dataset.img;
    };

    const showPrevImage = () => {
        currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
        modalImage.src = galleryItems[currentImageIndex].dataset.img;
    };

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openModal(index));
    });

    closeModalBtn.addEventListener('click', closeModal);
    nextBtn.addEventListener('click', showNextImage);
    prevBtn.addEventListener('click', showPrevImage);

    // Fechar modal ao clicar fora da imagem
    galleryModal.addEventListener('click', (e) => {
        if (e.target === galleryModal) {
            closeModal();
        }
    });

    // Fechar modal com a tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && galleryModal.classList.contains('modal-open')) {
            closeModal();
        }
    });
});
