const hamburger = document.getElementById('hamburger');
const hamburgerMenu = document.getElementById('hamburger-menu');

let timeoutId;

const showMenu = () => {
    clearTimeout(timeoutId);
    hamburgerMenu.style.opacity = '1';
    hamburgerMenu.style.visibility = 'visible';
};

const hideMenu = () => {
    timeoutId = setTimeout(() => {
        hamburgerMenu.style.opacity = '0';
        hamburgerMenu.style.visibility = 'hidden';
    }, 300); // 300мс задержки — можно перейти в меню
};

hamburger.addEventListener('mouseenter', showMenu);
hamburgerMenu.addEventListener('mouseenter', showMenu);
hamburger.addEventListener('mouseleave', hideMenu);
hamburgerMenu.addEventListener('mouseleave', hideMenu);
