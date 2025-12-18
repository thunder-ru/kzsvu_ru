const hamburger = document.getElementById('hamburger');
const hamburgerMenu = document.getElementById('hamburger-menu');

hamburger.addEventListener('mouseenter', () => {
    hamburgerMenu.style.opacity = '1';
    hamburgerMenu.style.visibility = 'visible';
});

hamburgerMenu.addEventListener('mouseenter', () => {
    hamburgerMenu.style.opacity = '1';
    hamburgerMenu.style.visibility = 'visible';
});

const hideHamburgerMenu = () => {
    hamburgerMenu.style.opacity = '0';
    hamburgerMenu.style.visibility = 'hidden';
};

hamburger.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!hamburgerMenu.matches(':hover')) hideHamburgerMenu();
    }, 100);
});

hamburgerMenu.addEventListener('mouseleave', hideHamburgerMenu);
