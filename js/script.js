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
});