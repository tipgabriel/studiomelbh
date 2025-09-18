// MeltrançasBH Website JavaScript

// DOM Elements
let elements = {};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Get DOM elements
    initializeElements();
    
    // Setup event listeners
    setupEventListeners();
    
    // Setup animations
    setupAnimations();
    
    // Update copyright year
    updateCopyrightYear();
    
    // Setup gallery filtering
    setupGalleryFilter();
});

function initializeElements() {
    elements = {
        // Mobile menu
        mobileMenuToggle: document.getElementById('mobile-menu-toggle'),
        mobileMenu: document.getElementById('mobile-menu'),
        menuIcon: document.getElementById('menu-icon'),
        closeIcon: document.getElementById('close-icon'),
        
        // Navigation buttons
        servicesBtn: document.getElementById('services-btn'),
        galleryBtn: document.getElementById('gallery-btn'),
        
        // Navigation links
        navLinks: document.querySelectorAll('a[href^="#"]'),
        
        // Form
        contactForm: document.getElementById('contact-form'),
        toast: document.getElementById('toast'),
        toastMessage: document.getElementById('toast-message'),
        
        // Header
        header: document.getElementById('header'),
        
        // Gallery
        filterBtns: document.querySelectorAll('.filter-btn'),
        galleryItems: document.querySelectorAll('.gallery-item'),
        
        // Copyright year
        currentYear: document.getElementById('current-year')
    };
}

function setupEventListeners() {
    // Mobile menu
    elements.mobileMenuToggle?.addEventListener('click', toggleMobileMenu);
    
    // Navigation buttons
    elements.servicesBtn?.addEventListener('click', () => {
        document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    });
    
    elements.galleryBtn?.addEventListener('click', () => {
        document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Navigation links
    elements.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                closeMobileMenu();
            }
        });
    });
    
    // Contact form
    elements.contactForm?.addEventListener('submit', handleContactSubmit);
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!elements.mobileMenuToggle?.contains(e.target) && !elements.mobileMenu?.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Scroll effects
    window.addEventListener('scroll', handleScroll);
}

function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    if (elements.currentYear) {
        elements.currentYear.textContent = currentYear;
    }
}

function toggleMobileMenu() {
    const isOpen = !elements.mobileMenu.classList.contains('hidden');
    
    if (isOpen) {
        closeMobileMenu();
    } else {
        elements.mobileMenu.classList.remove('hidden');
        elements.menuIcon.classList.add('hidden');
        elements.closeIcon.classList.remove('hidden');
    }
}

function closeMobileMenu() {
    elements.mobileMenu.classList.add('hidden');
    elements.menuIcon.classList.remove('hidden');
    elements.closeIcon.classList.add('hidden');
}

function handleScroll() {
    const scrolled = window.scrollY > 50;
    
    if (scrolled) {
        elements.header.classList.add('header-bg', 'shadow-lg');
    } else {
        elements.header.classList.remove('header-bg', 'shadow-lg');
    }
    
    // Animate elements on scroll
    animateOnScroll();
}

function setupAnimations() {
    // Add fade-in class to elements that should animate
    const animateElements = document.querySelectorAll('section > div');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
    });
    
    // Initial animation check
    animateOnScroll();
}

function animateOnScroll() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

function setupGalleryFilter() {
    elements.filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            // Update active button
            elements.filterBtns.forEach(b => {
                b.classList.remove('active', 'bg-purple-600', 'text-white');
                b.classList.add('bg-gray-200', 'text-gray-700');
            });
            btn.classList.add('active', 'bg-purple-600', 'text-white');
            btn.classList.remove('bg-gray-200', 'text-gray-700');
            
            // Filter gallery items
            elements.galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        service: formData.get('service'),
        message: formData.get('message')
    };
    
    // Simulate form submission
    showToast('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    
    // Reset form
    e.target.reset();
    
    // In a real application, you would send this data to your backend
    console.log('Contact form submitted:', data);
    
    // You could also redirect to WhatsApp
    // const whatsappMessage = `Olá! Meu nome é ${data.name}. Gostaria de agendar: ${data.service}. ${data.message}`;
    // const whatsappUrl = `https://wa.me/5531999999999?text=${encodeURIComponent(whatsappMessage)}`;
    // window.open(whatsappUrl, '_blank');
}

function showToast(message) {
    elements.toastMessage.textContent = message;
    elements.toast.classList.remove('translate-x-full');
    
    setTimeout(() => {
        elements.toast.classList.add('translate-x-full');
    }, 4000);
}

// Utility function to get service from URL hash
function getServiceFromHash() {
    const hash = window.location.hash;
    if (hash === '#nago') return 'Tranças Nagô';
    if (hash === '#soltas') return 'Tranças Soltas';
    if (hash === '#box') return 'Box Braids';
    return '';
}

// Auto-scroll to service if coming from external link
window.addEventListener('load', () => {
    const service = getServiceFromHash();
    if (service) {
        setTimeout(() => {
            document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
        }, 1000);
    }
});

// Smooth reveal animation for service cards
function animateServiceCards() {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Call animation when services section is visible
const servicesSection = document.getElementById('services');
if (servicesSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateServiceCards();
                observer.unobserve(entry.target);
            }
        });
    });
    
    observer.observe(servicesSection);
}
