// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqList = document.querySelector('.faq-list');
    
    if (!faqList) return;
    
    // Event delegation for FAQ items
    faqList.addEventListener('click', function(e) {
        const question = e.target.closest('.faq-question');
        if (!question) return;
        
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        const allFaqItems = faqList.querySelectorAll('.faq-item');
        allFaqItems.forEach(item => {
            item.classList.remove('active');
            const btn = item.querySelector('.faq-question');
            btn.setAttribute('aria-expanded', 'false');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
            question.setAttribute('aria-expanded', 'true');
        }
    });
    
    // Keyboard navigation for FAQ
    faqList.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            const question = e.target.closest('.faq-question');
            if (question) {
                e.preventDefault();
                question.click();
            }
        }
    });
});

// Smooth scroll for CTA buttons
document.addEventListener('DOMContentLoaded', function() {
    const viewPlansBtn = document.querySelector('.btn-secondary');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    // View Plans button scroll
    if (viewPlansBtn) {
        viewPlansBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const pricingSection = document.getElementById('pricing');
            if (pricingSection) {
                pricingSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    // Scroll indicator click
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const featuresSection = document.getElementById('features');
            if (featuresSection) {
                featuresSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});

// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .pricing-card, .faq-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add floating particles effect
document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Create particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            pointer-events: none;
            animation: float ${Math.random() * 3 + 2}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 2}s;
        `;
        hero.appendChild(particle);
    }
    
    // Add CSS for particle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.1; }
            50% { transform: translateY(-20px) rotate(180deg); opacity: 0.3; }
        }
    `;
    document.head.appendChild(style);
});