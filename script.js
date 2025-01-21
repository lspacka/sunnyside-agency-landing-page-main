const burger = document.querySelector('.burger-container')
const menu = document.querySelector('.header-links')
const arrow = document.querySelector('.arrow')

burger.addEventListener('click', () => {
    menu.classList.toggle('active')
    arrow.classList.toggle('visible')
})