const burger = document.querySelector('.burger-container')
const menu = document.querySelector('.header-links')
const arrow = document.querySelector('.arrow')
const heading = document.querySelector('.heading-text')

burger.addEventListener('click', () => {
    menu.classList.toggle('active')
    arrow.classList.toggle('visible')
    heading.classList.toggle('visible')
})