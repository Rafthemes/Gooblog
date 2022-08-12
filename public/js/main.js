new Swiper('.nav-swiper', {
  slidesPerView: 'auto',
  navigation: {
    prevEl: '.nav-swiper-prev',
    nextEl: '.nav-swiper-next',
  }
});



const toggleTheme = document.querySelector('#toggle-theme')
const toggleThemeIcon = toggleTheme.querySelector('img')
const toggleThemeText = toggleTheme.querySelector('.text')
const html = document.querySelector('html')

if (JSON.parse(localStorage.getItem('darkmode'))) {
  html.classList.add('dark')
  toggleThemeText.textContent = 'Dark'
  toggleThemeIcon.src = '/images/icons/darkmode.svg'
} else {
  html.classList.remove('dark')
  toggleThemeText.textContent = 'Light'
  toggleThemeIcon.src = '/images/icons/lightmode.svg'
}

toggleTheme.addEventListener('click', () => {
  switchTheme()
})

function switchTheme() {
  if (!html.classList.contains('dark')) {
    html.classList.add('dark')
    localStorage.setItem('darkmode', true)
    toggleThemeText.textContent = 'Dark'
    toggleThemeIcon.src = '/images/icons/darkmode.svg'
  } else {
    html.classList.remove('dark')
    localStorage.setItem('darkmode', false)
    toggleThemeText.textContent = 'Light'
    toggleThemeIcon.src = '/images/icons/lightmode.svg'
  }
}

