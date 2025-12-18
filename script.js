const hamburger = document.getElementById('hamburger');
const hamburgerMenu = document.getElementById('hamburger-menu');

hamburger.addEventListener('mouseenter', () => {
    hamburgerMenu.classList.add('active');
});

hamburgerMenu.addEventListener('mouseenter', () => {
    hamburgerMenu.classList.add('active');
});

hamburger.addEventListener('mouseleave', () => {
    // Задержка, чтобы можно было перейти в меню
    setTimeout(() => {
        if (!hamburgerMenu.matches(':hover')) {
            hamburgerMenu.classList.remove('active');
        }
    }, 300);
});

hamburgerMenu.addEventListener('mouseleave', () => {
    hamburgerMenu.classList.remove('active');
});
