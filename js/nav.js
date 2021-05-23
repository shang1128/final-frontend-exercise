const nav_toggler = document.querySelector('#toggler input');
const home_toggler = document.querySelector('#home_toggler input');
const parent_nav = document.querySelector('#parent_nav');
const child_nav = document.querySelector('.home .dropdown');
const icon = document.querySelector('.home i');

nav_toggler.addEventListener('click', function () {
    if (nav_toggler.checked) {
        parent_nav.classList.add('active');
    } else {
        parent_nav.classList.remove('active');
    }
})
home_toggler.addEventListener('click', function () {
    if (home_toggler.checked) {
        child_nav.classList.add('active');
        icon.setAttribute('class', 'fas fa-chevron-up');
    } else {
        child_nav.classList.remove('active');
        icon.setAttribute('class', 'fas fa-chevron-down');
    }
})