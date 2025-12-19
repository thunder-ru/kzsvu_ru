const hamburger = document.getElementById('hamburger');
const hamburgerMenu = document.getElementById('hamburger-menu');

// Обработчик клика для гамбургера
hamburger.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('visible');
});

// Закрытие меню при клике вне его
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !hamburgerMenu.contains(e.target)) {
        hamburgerMenu.classList.remove('visible');
    }
});
