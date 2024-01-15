let dropdown = document.querySelector('.nav__dropdown')
let menu = document.querySelector('.header__menu--dropdown')

menu.addEventListener('click', show)

function show() {
    if (window.innerWidth < 1000) {
        dropdown.classList.toggle('active') 
    }
}