// Main JavaScript file for Meltranças BH website
// Data is now loaded from data.js
const { businessInfo, services, testimonials, faqs, galleryImages, featuredWorks } = data;

// Initialize Lucide icons when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    initializeMobileMenu();
    updateCopyrightYear();
    setActiveNavigation();
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
    const phoneNumber = businessInfo.whatsapp;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// Update copyright year automatically
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
}

// Set active navigation based on current page
function setActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Reset classes
        link.classList.remove('text-brand-pink', 'border-b-2', 'border-brand-pink');
        link.classList.add('text-gray-700', 'hover:text-brand-pink', 'transition-colors');
        
        // Add active classes for desktop nav
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('text-brand-pink', 'border-b-2', 'border-brand-pink');
            link.classList.remove('text-gray-700', 'hover:text-brand-pink');
        }

        // Add active classes for mobile nav
        const mobileLink = document.querySelector(`#mobile-menu a[href="${href}"]`);
        if (mobileLink) {
            mobileLink.classList.remove('text-white', 'cta-gradient', 'hover:bg-gray-200', 'text-gray-700');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                mobileLink.classList.add('text-white', 'cta-gradient');
            } else {
                mobileLink.classList.add('text-gray-700', 'hover:bg-gray-200');
            }
        }
    });
}

// Form submission handler
function handleFormSubmit(event) {
    event.preventDefault();
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

// ----- Gallery Functions -----
let currentImages = [];
let currentImageIndex = 0;
const galleryModal = document.getElementById('gallery-modal');
const modalImage = document.getElementById('modal-image');
const modalAlt = document.getElementById('modal-alt');
const modalCounter = document.getElementById('modal-counter');

function renderGallery(images) {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;
    
    galleryGrid.innerHTML = '';
    images.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = 'relative group cursor-pointer overflow-hidden rounded-lg shadow-md';
        item.innerHTML = `
            <img src="${image.url}" alt="${image.alt}" class="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110">
            <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <i data-lucide="expand" class="w-8 h-8 text-white"></i>
            </div>
        `;
        item.addEventListener('click', () => openGalleryModal(image.url, image.alt, images, index));
        galleryGrid.appendChild(item);
    });
    lucide.createIcons();
}

function filterGallery(category) {
    const buttons = document.querySelectorAll('.gallery-filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.gallery-filter-btn[onclick="filterGallery('${category}')"]`).classList.add('active');
    
    if (category === 'all') {
        renderGallery(galleryImages.all);
    } else {
        renderGallery(galleryImages[category]);
    }
}

function openGalleryModal(imageUrl, alt, images, index) {
    currentImages = images;
    currentImageIndex = index;

    if (galleryModal && modalImage && modalAlt && modalCounter) {
        modalImage.src = imageUrl;
        modalImage.alt = alt;
        modalAlt.textContent = alt;
        modalCounter.textContent = `${index + 1} de ${images.length}`;
        galleryModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleGalleryKeyPress);
    }
}

function closeGalleryModal() {
    if (galleryModal) {
        galleryModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        window.removeEventListener('keydown', handleGalleryKeyPress);
    }
}

function navigateGallery(direction) {
    if (currentImages.length === 0) return;
    
    if (direction === 'next') {
        currentImageIndex = (currentImageIndex + 1) % currentImages.length;
    } else if (direction === 'prev') {
        currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
    }
    
    const currentImage = currentImages[currentImageIndex];
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

// ----- Dynamic Content Functions -----
function renderServices(services) {
    const servicesGrid = document.getElementById('services-grid');
    if (!servicesGrid) return;
    
    let servicesHtml = '';
    services.forEach(service => {
        servicesHtml += `
            <div class="bg-gray-100 p-6 rounded-lg shadow-md hover-shadow transition-all text-center">
                <img src="${service.image}" alt="${service.name}" class="w-24 h-24 mx-auto mb-4 rounded-full object-cover">
                <h3 class="text-xl font-semibold text-brand-purple mb-2">${service.name}</h3>
                <p class="text-sm text-gray-600">${service.description}</p>
                <span class="inline-block mt-4 text-brand-pink font-bold">${service.price}</span>
            </div>
        `;
    });
    servicesGrid.innerHTML = servicesHtml;
}

function renderServicesPage(services) {
    const servicesGrid = document.getElementById('services-page-grid');
    if (!servicesGrid) return;
    
    let servicesHtml = '';
    services.forEach(service => {
        servicesHtml += `
            <div class="bg-white p-8 rounded-lg shadow-lg hover-shadow transition-all space-y-4">
                <div class="flex items-center space-x-4">
                    <img src="${service.image}" alt="${service.name}" class="w-16 h-16 rounded-full object-cover">
                    <h3 class="text-2xl font-bold text-gray-800">${service.name}</h3>
                </div>
                <p class="text-gray-600">${service.description}</p>
                <div class="flex items-center justify-between">
                    <span class="text-lg font-bold text-brand-pink">${service.price}</span>
                    <span class="text-sm text-gray-500">${service.duration}</span>
                </div>
            </div>
        `;
    });
    servicesGrid.innerHTML = servicesHtml;
}

function renderFeaturedWorks(works) {
    const worksGrid = document.getElementById('featured-works-grid');
    if (!worksGrid) return;

    let worksHtml = '';
    works.forEach(work => {
        worksHtml += `
            <div class="relative group cursor-pointer rounded-lg overflow-hidden fade-in hover-scale hover-shadow transition-all">
                <img src="${work.image}" alt="${work.title}" class="w-full h-64 object-cover">
                <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <h4 class="text-white font-semibold text-lg">${work.title}</h4>
                    <p class="text-gray-300 text-sm mt-1">${work.description}</p>
                </div>
            </div>
        `;
    });
    worksGrid.innerHTML = worksHtml;
}

function renderTestimonials(testimonials) {
    const testimonialsGrid = document.getElementById('testimonials-grid');
    if (!testimonialsGrid) return;

    let testimonialsHtml = '';
    testimonials.forEach(testimonial => {
        testimonialsHtml += `
            <div class="bg-white p-6 rounded-lg shadow-md hover-shadow transition-all">
                <blockquote class="text-gray-600 italic">"${testimonial.quote}"</blockquote>
                <div class="mt-4 flex items-center">
                    <img src="${testimonial.image}" alt="${testimonial.name}" class="w-10 h-10 rounded-full object-cover mr-4">
                    <div>
                        <p class="font-semibold text-gray-800">${testimonial.name}</p>
                        <p class="text-sm text-gray-500">${testimonial.location}</p>
                    </div>
                </div>
            </div>
        `;
    });
    testimonialsGrid.innerHTML = testimonialsHtml;
}

function renderFaqs(faqs) {
    const faqAccordion = document.getElementById('faq-accordion');
    if (!faqAccordion) return;

    let faqsHtml = '';
    faqs.forEach((faq, index) => {
        faqsHtml += `
            <div class="border-b border-gray-200 py-4">
                <button class="faq-toggle w-full flex justify-between items-center text-left text-gray-800 font-semibold" onclick="toggleFaq(this)">
                    ${faq.question}
                    <i data-lucide="chevron-down" class="w-5 h-5 transition-transform duration-300"></i>
                </button>
                <div class="faq-content hidden mt-2 text-gray-600">
                    <p class="pl-6">${faq.answer}</p>
                </div>
            </div>
        `;
    });
    faqAccordion.innerHTML = faqsHtml;
    lucide.createIcons();
}

function toggleFaq(button) {
    const icon = button.querySelector('[data-lucide]');
    const content = button.nextElementSibling;
    const isHidden = content.classList.contains('hidden');
    
    if (isHidden) {
        content.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
    } else {
        content.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
    }
}

function renderAboutPage(content) {
    const aboutContentDiv = document.getElementById('about-content');
    if (!aboutContentDiv) return;
    
    let contentHtml = `
        <h2 class="text-3xl font-bold gradient-text">${content.title}</h2>
        <p class="text-gray-600">${content.description}</p>
        <div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Nossa Missão</h3>
            <p class="text-gray-600">${content.mission}</p>
        </div>
        <div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Nossa Visão</h3>
            <p class="text-gray-600">${content.vision}</p>
        </div>
        <div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Nossos Valores</h3>
            <ul class="list-disc list-inside space-y-1 text-gray-600">
                ${content.values.map(value => `<li>${value}</li>`).join('')}
            </ul>
        </div>
    `;
    aboutContentDiv.innerHTML = contentHtml;
}
