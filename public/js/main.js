// Selim Tesisat - Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.service-card, .feature-item, .section-header').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // Header scroll effect
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide header on scroll down, show on scroll up
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });
    
    // Contact Form Handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.textContent = 'Gönderiliyor...';
            submitBtn.disabled = true;
            
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(Object.fromEntries(formData))
                });
                
                const result = await response.json();
                
                if (result.success) {
                    showMessage('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.', 'success');
                    contactForm.reset();
                } else {
                    showMessage(result.message || 'Bir hata oluştu. Lütfen tekrar deneyin.', 'error');
                }
            } catch (error) {
                showMessage('Bağlantı hatası. Lütfen tekrar deneyin.', 'error');
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
    
    // Message display function
    function showMessage(message, type) {
        // Remove existing messages
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        const messageEl = document.createElement('div');
        messageEl.className = `form-message ${type}`;
        messageEl.textContent = message;
        
        const form = document.getElementById('contact-form');
        if (form) {
            form.appendChild(messageEl);
            
            // Auto remove after 5 seconds
            setTimeout(() => {
                messageEl.remove();
            }, 5000);
        }
    }
    
    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Phone number click tracking (for analytics)
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', function() {
            // Track phone clicks for analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'phone_call', {
                    event_category: 'engagement',
                    event_label: 'header_phone'
                });
            }
        });
    });
    
    // Service card hover effects
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Emergency contact banner
    function showEmergencyBanner() {
        const banner = document.createElement('div');
        banner.className = 'emergency-banner';
        banner.innerHTML = `
            <div class="banner-content">
                <span>🚨 7/24 Acil Servis</span>
                <a href="tel:+90XXXXXXXXX" class="emergency-phone">Hemen Ara</a>
                <button class="close-banner">&times;</button>
            </div>
        `;
        
        document.body.insertBefore(banner, document.body.firstChild);
        
        // Close banner functionality
        banner.querySelector('.close-banner').addEventListener('click', function() {
            banner.remove();
            localStorage.setItem('emergencyBannerClosed', 'true');
        });
        
        // Auto-hide after 10 seconds
        setTimeout(() => {
            if (banner.parentNode) {
                banner.remove();
            }
        }, 10000);
    }
    
    // Show emergency banner if not closed before
    if (!localStorage.getItem('emergencyBannerClosed')) {
        setTimeout(showEmergencyBanner, 3000);
    }
    
    // Add to home screen prompt for mobile
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        
        // Show install button after 30 seconds
        setTimeout(() => {
            if (deferredPrompt) {
                const installBtn = document.createElement('button');
                installBtn.className = 'install-app-btn';
                installBtn.textContent = 'Uygulamayı Yükle';
                installBtn.onclick = async () => {
                    deferredPrompt.prompt();
                    const { outcome } = await deferredPrompt.userChoice;
                    if (outcome === 'accepted') {
                        console.log('User accepted the install prompt');
                    }
                    deferredPrompt = null;
                    installBtn.remove();
                };
                document.body.appendChild(installBtn);
            }
        }, 30000);
    });
    
    // Initialize performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                const perfData = performance.getEntriesByType('navigation')[0];
                if (perfData && typeof gtag !== 'undefined') {
                    gtag('event', 'timing_complete', {
                        name: 'load',
                        value: Math.round(perfData.loadEventEnd - perfData.loadEventStart)
                    });
                }
            }, 0);
        });
    }
});

// Service Worker Registration (for PWA)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// WhatsApp contact function
function openWhatsApp(message = 'Merhaba, tesisatçı hizmetiyle ilgili bilgi almak istiyorum.') {
    const phone = '90XXXXXXXXX'; // Replace with actual WhatsApp number
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Schema.org structured data injection
function addStructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Selim Sıhhi Tesisat ve Tamirat",
        "image": window.location.origin + "/images/selim-logo.png",
        "description": "İzmir'de profesyonel tesisatçı hizmetleri veren güvenilir firma",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "İzmir",
            "addressCountry": "TR"
        },
        "telephone": "+90-XXX-XXX-XXXX",
        "url": window.location.origin,
        "priceRange": "$$",
        "openingHours": ["Mo-Fr 08:00-18:00", "Sa-Su 09:00-17:00"],
        "serviceArea": "İzmir",
        "areaServed": "İzmir"
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
}

// Initialize structured data
addStructuredData();