// Main JavaScript file for Meltranças BH website

// Initialize Lucide icons when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    initializeMobileMenu();
});

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Toggle icon between menu and X
            const icon = mobileMenuBtn.querySelector('[data-lucide]');
            if (mobileMenu.classList.contains('hidden')) {
                icon.setAttribute('data-lucide', 'menu');
            } else {
                icon.setAttribute('data-lucide', 'x');
            }
            lucide.createIcons();
        });
    }
}

// WhatsApp functionality
function openWhatsApp(message = "Olá! Gostaria de agendar um horário.") {
    const phoneNumber = "5531933012152";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// Gallery functionality
let currentImageIndex = 0;
let currentImages = [];

function openGalleryModal(imageUrl, alt, images, index) {
    currentImages = images;
    currentImageIndex = index;
    
    const modal = document.getElementById('gallery-modal');
    const modalImage = document.getElementById('modal-image');
    const modalAlt = document.getElementById('modal-alt');
    const modalCounter = document.getElementById('modal-counter');
    
    if (modal && modalImage && modalAlt && modalCounter) {
        modalImage.src = imageUrl;
        modalImage.alt = alt;
        modalAlt.textContent = alt;
        modalCounter.textContent = `${index + 1} de ${images.length}`;
        
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        
        // Add keyboard event listener
        document.addEventListener('keydown', handleGalleryKeyPress);
    }
}

function closeGalleryModal() {
    const modal = document.getElementById('gallery-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        
        // Remove keyboard event listener
        document.removeEventListener('keydown', handleGalleryKeyPress);
    }
}

function navigateGallery(direction) {
    if (currentImages.length === 0) return;
    
    if (direction === 'next') {
        currentImageIndex = (currentImageIndex + 1) % currentImages.length;
    } else {
        currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
    }
    
    const currentImage = currentImages[currentImageIndex];
    const modalImage = document.getElementById('modal-image');
    const modalAlt = document.getElementById('modal-alt');
    const modalCounter = document.getElementById('modal-counter');
    
    if (modalImage && modalAlt && modalCounter) {
        modalImage.src = currentImage.url;
        modalImage.alt = currentImage.alt;
        modalAlt.textContent = currentImage.alt;
        modalCounter.textContent = `${currentImageIndex + 1} de ${currentImages.length}`;
    }
}

function handleGalleryKeyPress(e) {
    switch (e.key) {
        case 'Escape':
            closeGalleryModal();
            break;
        case 'ArrowLeft':
            navigateGallery('prev');
            break;
        case 'ArrowRight':
            navigateGallery('next');
            break;
    }
}

// Gallery filter functionality
function filterGallery(category) {
    const galleryData = {
        nago: [
            {
                url: "https://images.unsplash.com/photo-1644152993066-9b9ee687930d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnJhaWRzfGVufDB8fHx8MTc1NzUzNTk0Mnww&ixlib=rb-4.1.0&q=85",
                alt: "Tranças Nagô estilo tradicional"
            },
            {
                url: "https://images.unsplash.com/photo-1702236240794-58dc4c6895e5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxhZnJpY2FuJTIwYnJhaWRzfGVufDB8fHx8MTc1NzUzNTk0Mnww&ixlib=rb-4.1.0&q=85",
                alt: "Tranças Nagô com padrão geométrico"
            },
            {
                url: "https://images.unsplash.com/photo-1747330666091-ee0e46f8a72c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHxhZnJpY2FuJTIwYnJhaWRzfGVufDB8fHx8MTc1NzUzNTk0Mnww&ixlib=rb-4.1.0&q=85",
                alt: "Tranças Nagô elaboradas"
            }
        ],
        boxBraids: [
            {
                url: "https://images.unsplash.com/photo-1594254773847-9fce26e950bc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxib3glMjBicmFpZHN8ZW58MHx8fHwxNzU3NTM1OTI3fDA&ixlib=rb-4.1.0&q=85",
                alt: "Box Braids longas"
            },
            {
                url: "https://images.unsplash.com/photo-1606416132922-22ab37c1231e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxib3glMjBicmFpZHN8ZW58MHx8fHwxNzU3NTM1OTI3fDA&ixlib=rb-4.1.0&q=85",
                alt: "Box Braids médias"
            },
            {
                url: "https://images.unsplash.com/photo-1592328906746-0a3ca0bde253?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxib3glMjBicmFpZHN8ZW58MHx8fHwxNzU3NTM1OTI3fDA&ixlib=rb-4.1.0&q=85",
                alt: "Box Braids com cores"
            }
        ],
        boxeadora: [
            {
                url: "https://images.unsplash.com/photo-1673470907547-1c0c6a996095?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxjb3Jucm93c3xlbnwwfHx8fDE3NTc1MzU5NjV8MA&ixlib=rb-4.1.0&q=85",
                alt: "Tranças Boxeadora clássicas"
            },
            {
                url: "https://images.unsplash.com/photo-1698299708000-bb14e23fe2df?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxjb3Jucm93c3xlbnwwfHx8fDE3NTc1MzU5NjV8MA&ixlib=rb-4.1.0&q=85",
                alt: "Tranças Boxeadora laterais"
            },
            {
                url: "https://images.pexels.com/photos/30215199/pexels-photo-30215199.jpeg",
                alt: "Tranças Boxeadora estilizadas"
            }
        ],
        fulani: [
            {
                url: "https://images.unsplash.com/photo-1711637819201-1f2671641b4e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxmdWxhbmklMjBicmFpZHN8ZW58MHx8fHwxNzU3NTM1OTQ5fDA&ixlib=rb-4.1.0&q=85",
                alt: "Fulani Braids com miçangas"
            },
            {
                url: "https://images.pexels.com/photos/33837423/pexels-photo-33837423.jpeg",
                alt: "Fulani Braids elaboradas"
            },
            {
                url: "https://images.pexels.com/photos/12788372/pexels-photo-12788372.jpeg",
                alt: "Fulani Braids tradicionais"
            }
        ]
    };

    const allImages = [
        ...galleryData.nago,
        ...galleryData.boxBraids,
        ...galleryData.boxeadora,
        ...galleryData.fulani
    ];

    const imagesToShow = category === 'all' ? allImages : galleryData[category] || [];
    
    const galleryGrid = document.getElementById('gallery-grid');
    if (galleryGrid) {
        galleryGrid.innerHTML = '';
        
        if (imagesToShow.length === 0) {
            galleryGrid.innerHTML = `
                <div class="col-span-full text-center py-12">
                    <p class="text-gray-500 text-lg">Nenhuma imagem encontrada para esta categoria.</p>
                </div>
            `;
            return;
        }
        
        imagesToShow.forEach((image, index) => {
            const imageElement = document.createElement('div');
            imageElement.className = 'group cursor-pointer relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300';
            imageElement.onclick = () => openGalleryModal(image.url, image.alt, imagesToShow, index);
            
            imageElement.innerHTML = `
                <img src="${image.url}" alt="${image.alt}" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300">
                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                    <div class="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p class="text-sm font-medium">Clique para ampliar</p>
                    </div>
                </div>
            `;
            
            galleryGrid.appendChild(imageElement);
        });
    }
    
    // Update filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.classList.remove('bg-pink-600', 'text-white');
        btn.classList.add('bg-gray-100', 'text-gray-700');
    });
    
    const activeBtn = document.querySelector(`[onclick="filterGallery('${category}')"]`);
    if (activeBtn) {
        activeBtn.classList.remove('bg-gray-100', 'text-gray-700');
        activeBtn.classList.add('bg-pink-600', 'text-white');
    }
}

// Contact form functionality
function handleContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        service: formData.get('service'),
        message: formData.get('message')
    };
    
    // Simulate form submission
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 animate-spin mr-2"></i>Enviando...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        event.target.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        lucide.createIcons();
    }, 2000);
}

// Set active navigation
function setActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('text-pink-600', 'border-b-2', 'border-pink-600');
            link.classList.remove('text-gray-700');
        } else {
            link.classList.add('text-gray-700');
            link.classList.remove('text-pink-600', 'border-b-2', 'border-pink-600');
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    initializeMobileMenu();
    setActiveNavigation();
    
    // Initialize gallery if on gallery page
    if (window.location.pathname.includes('galeria.html')) {
        filterGallery('all');
    }
});
