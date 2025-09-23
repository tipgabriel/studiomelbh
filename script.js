document.addEventListener('DOMContentLoaded', function() {
  const galleryModal = document.getElementById('gallery-modal');
  if (galleryModal) {
    galleryModal.style.display = 'none';
    galleryModal.setAttribute('aria-hidden', 'true');
  }
    // Menu mobile
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if(menuButton && mobileMenu){
        menuButton.addEventListener('click', () => mobileMenu.classList.toggle('show'));
        mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => mobileMenu.classList.remove('show')));
    }

    // Atualiza ano do copyright
    const copyrightSpan = document.getElementById('copyright-year');
    if(copyrightSpan) copyrightSpan.textContent = `© ${new Date().getFullYear()} Studiomelbh. Todos os direitos reservados.`;

    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => anchor.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) target.scrollIntoView({ behavior:'smooth' });
    }));

    // Galeria de imagens
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

    const showNextImage = () => { currentImageIndex = (currentImageIndex + 1) % images.length; modalImage.src = images[currentImageIndex]; };
    const showPrevImage = () => { currentImageIndex = (currentImageIndex - 1 + images.length) % images.length; modalImage.src = images[currentImageIndex]; };

    portfolioItems.forEach((item,index) => item.addEventListener('click',()=>openModal(index)));
    if(prevBtn) prevBtn.addEventListener('click',showPrevImage);
    if(nextBtn) nextBtn.addEventListener('click',showNextImage);
    if(closeModalBtn) closeModalBtn.addEventListener('click',closeModal);
    if(galleryModal) galleryModal.addEventListener('click', e=>{ if(e.target===galleryModal) closeModal(); });
    document.addEventListener('keydown', e=>{ if(galleryModal&&!galleryModal.classList.contains('hidden')){
        if(e.key==='ArrowLeft') showPrevImage();
        else if(e.key==='ArrowRight') showNextImage();
        else if(e.key==='Escape') closeModal();
    }});
});
