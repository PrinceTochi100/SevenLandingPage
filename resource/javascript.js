const toggleBtn = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav-menu');

toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active')
});

//progress bar section
const progressFills = document.querySelectorAll('.progress-fill');

const animateOnScroll = () => {
    progressFills.forEach(fill => {
        const rect = fill.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight - 50 && !fill.classList.contains('animated')) {
            fill.style.width = fill.getAttribute('data-percent') + '%';
            fill.classList.add('animated'); // Prevent retrigger
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);