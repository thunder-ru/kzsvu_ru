const hamburger = document.getElementById('hamburger');
const hamburgerMenu = document.getElementById('hamburger-menu');

const show = () => hamburgerMenu.classList.add('visible');
const hide = () => hamburgerMenu.classList.remove('visible');

hamburger.addEventListener('mouseenter', show);
hamburgerMenu.addEventListener('mouseenter', show);
hamburger.addEventListener('mouseleave', hide);
hamburgerMenu.addEventListener('mouseleave', hide);
