new Swiper('.nav-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    navigation: {
      prevEl: '.nav-swiper-prev',
      nextEl: '.nav-swiper-next',
      lockClass: 'swiper-button-lock',
      disabledClass: 'opacity-0',
      hiddenClass: 'opacity-0'
    }
  });



  const toggleTheme = document.querySelector('#toggle-theme')
  const html = document.querySelector('html')

  if(JSON.parse(localStorage.getItem('darkmode'))) {
    html.classList.add('dark')
    toggleTheme.textContent = 'dark_mode'
  } else {
    html.classList.remove('dark')
    toggleTheme.textContent = 'light_mode'
  }

  toggleTheme.addEventListener('click', () => {
   switchTheme()
  })

  function switchTheme () {
    if (!html.classList.contains('dark')) {
     html.classList.add('dark')
     localStorage.setItem('darkmode', true)
     toggleTheme.textContent = 'dark_mode'
    } else {
     html.classList.remove('dark')
     localStorage.setItem('darkmode', false)
     toggleTheme.textContent = 'light_mode'
   }
  }


  // Toggling Filter Layer

  const filter = document.querySelector('#filter')
  const openFilter = document.querySelector('#open-filter')
  const closeFilter = document.querySelector('#close-filter')


  openFilter.addEventListener('click', () => {
    filter.classList.remove('translate-x-full')
  })
  closeFilter.addEventListener('click', () => {
    filter.classList.add('translate-x-full')
  })

  // Toggling Menu
  const menu = document.querySelector('#menu')
  const toggleMenu = document.querySelector('#toggle-menu')

  toggleMenu.addEventListener('click', () => {
    menu.classList.toggle('translate-y-[-150%]')
    toggleMenu.textContent = menu.classList.contains('translate-y-[-150%]') ? 'menu' : 'close'
  })