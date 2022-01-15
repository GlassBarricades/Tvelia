window.addEventListener('DOMContentLoaded', () => {

    const burgerBtn = document.querySelector('.burger'),
        menu = document.querySelector('.header__nav');

    burgerBtn.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
});