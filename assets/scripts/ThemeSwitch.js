let darkMode = localStorage.getItem('darkMode')
const themeSwitch = document.getElementById('themeSwitch')


const enableDarkmode = () => {
  document.body.classList.add('darkMode')
  localStorage.setItem('darkMode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkMode')
  localStorage.setItem('darkMode', null)
}

if(darkMode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
  darkMode = localStorage.getItem('darkMode')
  darkMode !== "active" ? enableDarkmode() : disableDarkmode()
})