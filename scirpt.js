// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqToggles = document.querySelectorAll('.faq-toggle');
    
    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            // Toggle active class on button
            this.classList.toggle('active');
            
            // Toggle content visibility
            content.classList.toggle('hidden');
            
            // Toggle icon rotation
            if (content.classList.contains('hidden')) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
    
    // Initialize all FAQ contents as hidden
    document.querySelectorAll('.faq-content').forEach(content => {
        content.style.maxHeight = null;
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});