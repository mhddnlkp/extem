window.onload = function() {
    const intro = document.getElementById('intro');
    const mainContent = document.getElementById('main-content');

    // Fade out intro
    setTimeout(() => {
        intro.style.opacity = 0;
        setTimeout(() => {
            intro.classList.add('hidden');
            mainContent.style.display = 'block';
            setTimeout(() => {
                mainContent.style.opacity = 1;
            }, 50); // Delay to ensure the main content is displayed before fading in
        }, 1000); // Match the fade out duration
    }, 3000); // Show intro for 3 seconds
};


// Accordion functionality
document.querySelectorAll('.accordion-header').forEach((accordionHeader) => {
    accordionHeader.addEventListener('click', () => {
        const accordion = accordionHeader.parentElement;
        accordion.classList.toggle('active');

        // Close other open accordions
        document.querySelectorAll('.accordion').forEach((item) => {
            if (item !== accordion) {
                item.classList.remove('active');
            }
        });
    });
});

