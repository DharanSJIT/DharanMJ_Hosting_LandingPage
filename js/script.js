document.addEventListener('DOMContentLoaded', function() {
    // Direct navigation fix
    document.querySelector('a[href="#features"]').onclick = function(e) {
        e.preventDefault();
        document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
    };
    
    document.querySelector('a[href="#pricing"]').onclick = function(e) {
        e.preventDefault();
        document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
    };
    
    document.querySelector('a[href="#testimonials"]').onclick = function(e) {
        e.preventDefault();
        document.getElementById('testimonials').scrollIntoView({ behavior: 'smooth' });
    };
    
    document.querySelector('a[href="#faq"]').onclick = function(e) {
        e.preventDefault();
        document.getElementById('faq').scrollIntoView({ behavior: 'smooth' });
    };
    
    // FAQ functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.onclick = function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            if (!isActive) {
                faqItem.classList.add('active');
            }
        };
    });
});