const toggleBtn = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav-menu');

toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active')
});