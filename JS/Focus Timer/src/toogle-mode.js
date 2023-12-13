let DarkMode = true;
const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light')
    const mode = DarkMode ? 'light' : 'dark'
    event.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`
    DarkMode = !DarkMode
})