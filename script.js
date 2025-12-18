const hamburger = document.getElementById('hamburger');
const hamburgerMenu = document.getElementById('hamburger-menu');

let timeout;

hamburger.addEventListener('mouseenter', () => {
    clearTimeout(timeout);
    hamburgerMenu.style.opacity = '1';
    hamburgerMenu.style.visibility = 'visible';
    hamburgerMenu.style.transform = 'translateY(0)';
});

hamburgerMenu.addEventListener('mouseenter', () => {
    clearTimeout(timeout);
    hamburgerMenu.style.opacity = '1';
    hamburgerMenu.style.visibility = 'visible';
    hamburgerMenu.style.transform = 'translateY(0)';
});

hamburger.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
        if (!hamburgerMenu.matches(':hover')) {
            hamburgerMenu.style.opacity = '0';
            hamburgerMenu.style.visibility = 'hidden';
            hamburgerMenu.style.transform = 'translateY(-10px)';
        }
    }, 200);
});

hamburgerMenu.addEventListener('mouseleave', () => {
    hamburgerMenu.style.opacity = '0';
    hamburgerMenu.style.visibility = 'hidden';
    hamburgerMenu.style.transform = 'translateY(-10px)';
});
