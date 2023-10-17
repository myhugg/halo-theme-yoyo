// colorscheme.js
let switchHandle = document.querySelector('#switch-color-scheme')
let themeIcon = document.querySelector('#theme-icon')
var html = document.documentElement

const switchMode = () => {
    let attr = html.getAttribute('data-user-color-scheme')
    let colorMode = 'light'
    if (attr === 'dark') {
         html.setAttribute('data-user-color-scheme', 'light')
        themeIcon.classList = 'ri-moon-fill'
        colorMode = 'light'
    } else {
        html.setAttribute('data-user-color-scheme', 'dark')
        themeIcon.classList = 'ri-sun-fill'
        colorMode = 'dark'
    }
    localStorage.setItem('data-user-color-scheme', colorMode)
}

switchHandle.addEventListener('click', switchMode, false)

const currColorMode = localStorage.getItem('data-user-color-scheme')
if (currColorMode === 'dark') {
    themeIcon.classList = 'ri-sun-fill'
} else {
    themeIcon.classList = 'ri-moon-fill'
}
