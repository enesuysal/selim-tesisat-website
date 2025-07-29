/* Common Header JavaScript - Mobile Navigation */
(function() {
    'use strict';
    
    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        console.log('Common header script loaded');
        
        // Mobile menu functionality
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.main-navigation .nav-menu');
        
        console.log('Mobile toggle found:', !!mobileToggle);
        console.log('Nav menu found:', !!navMenu);
        
        if (mobileToggle && navMenu) {
            // Toggle mobile menu
            mobileToggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                console.log('Mobile menu toggle clicked');
                
                // Toggle active states
                mobileToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
                
                // Toggle body scroll
                document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
                
                console.log('Menu is now:', navMenu.classList.contains('active') ? 'open' : 'closed');
            });
            
            // Close menu when clicking on navigation links
            const navLinks = navMenu.querySelectorAll('.nav-link');
            navLinks.forEach(function(link) {
                link.addEventListener('click', function() {
                    console.log('Nav link clicked, closing menu');
                    mobileToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!mobileToggle.contains(e.target) && !navMenu.contains(e.target)) {
                    if (navMenu.classList.contains('active')) {
                        console.log('Clicked outside, closing menu');
                        mobileToggle.classList.remove('active');
                        navMenu.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                }
            });
            
            // Handle window resize
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
                    console.log('Window resized to desktop, closing menu');
                    mobileToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
            
        } else {
            console.error('Mobile menu elements not found!');
            console.log('Available elements:', {
                toggles: document.querySelectorAll('[class*="toggle"]').length,
                menus: document.querySelectorAll('[class*="menu"]').length,
                navs: document.querySelectorAll('nav').length
            });
        }
    });
})();
