const hamburger = document.getElementById('hamburger');
const hamburgerMenu = document.getElementById('hamburger-menu');

hamburger.addEventListener('mouseenter', () => {
    hamburgerMenu.classList.add('visible');
});

hamburgerMenu.addEventListener('mouseenter', () => {
    hamburgerMenu.classList.add('visible');
});

hamburger.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!hamburgerMenu.matches(':hover')) {
            hamburgerMenu.classList.remove('visible');
        }
    }, 100);
});

hamburgerMenu.addEventListener('mouseleave', () => {
    hamburgerMenu.classList.remove('visible');
});
