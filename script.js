const burger = document.querySelector('.burger-container')
const menu = document.querySelector('.header-links')
const heading = document.querySelector('.heading-text')

burger.addEventListener('click', () => {
    menu.classList.toggle('active')
    heading.classList.toggle('visible')
})